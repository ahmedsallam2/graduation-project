import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./../styles/header.css"
// Components
import Logo from "./Logo.jsx"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    // // Handle scroll effect
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 20)
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.header__nav') && !event.target.closest('.header__menu-button')) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    // nav links: Home, About, Contact Us, How It Works, AI Model (with "New" badge)    
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'AI Model', path: '/chat' }
    ]

    return (
        <header className={`header `}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <Logo />
                </Link>

                <button
                    className={`header__menu-button ${isMenuOpen ? 'header__menu-button--active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                    <span className="header__menu-line"></span>
                </button>

                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path} className="header__nav-item">
                                <Link
                                    to={link.path}
                                    className={`header__nav-link ${isActiveLink(link.path) ? 'header__nav-link--active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}