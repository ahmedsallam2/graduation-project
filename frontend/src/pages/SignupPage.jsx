import React from 'react'
import { Link } from 'react-router-dom'

import SignupForm from '../components/Forms/SignupForm'

// MUI
import {
    Typography, Divider, Paper, Container, useTheme, useMediaQuery, Avatar, Fade, Zoom, Grow
} from '@mui/material'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import CloudDoneIcon from '@mui/icons-material/CloudDone';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function SignupPage() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(145deg, #569CF9 0%, #094BB0 100%)',
                position: 'relative',
                overflow: 'hidden',
                py: 4,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    animation: 'rotate 30s linear infinite',
                },
                '@keyframes rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            }}
        >
            {/* Floating decorative elements */}
            {[...Array(6)].map((_, i) => (
                <Box
                    key={i}
                    sx={{
                        position: 'absolute',
                        width: [20, 30, 40][i % 3],
                        height: [20, 30, 40][i % 3],
                        borderRadius: '50%',
                        background: `rgba(255,255,255,${0.05 + i * 0.02})`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${5 + i * 2}s ease-in-out infinite`,
                        '@keyframes float': {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                    }}
                />
            ))}

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grow in={true} timeout={1000}>
                    <Paper
                        elevation={24}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            borderRadius: 4,
                            overflow: 'hidden',
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255, 255, 255, 0.95)',
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.01)',
                            },
                        }}
                    >
                        {/* Left Side - Signup Form */}
                        <Box
                            sx={{
                                flex: '1 1 50%',
                                p: { xs: 3, sm: 4, md: 6 },
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Zoom in={true} timeout={1000}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'primary.main',
                                            width: 48,
                                            height: 48,
                                            mr: 2,
                                            boxShadow: '0 4px 14px 0 rgba(9, 75, 176, 0.4)',
                                        }}
                                    >
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography
                                            variant="h4"
                                            component="h1"
                                            sx={{
                                                fontWeight: 700,
                                                background: 'linear-gradient(145deg, #569CF9, #094BB0)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                color: 'transparent',
                                                mb: 0.5,
                                            }}
                                        >
                                            Create Account
                                        </Typography>
                                    </Box>
                                </Box>
                            </Zoom>

                            <Fade in={true} timeout={1500}>
                                <Box sx={{ flex: 1 }}>
                                    <SignupForm />
                                </Box>
                            </Fade>

                            <Box sx={{ mt: 4 }}>
                                <Divider sx={{ mb: 3 }}>
                                </Divider>

                                <Box sx={{ mt: 4, textAlign: 'center' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Already have an account?{' '}
                                        <Link
                                            to="/login"
                                            style={{
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                color: theme.palette.primary.main,
                                                transition: 'color 0.2s',
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = theme.palette.secondary.main}
                                            onMouseLeave={(e) => e.target.style.color = theme.palette.primary.main}
                                        >
                                            Sign in
                                        </Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Right Side - Decorative Panel */}
                        {!isTablet && (
                            <Box
                                sx={{
                                    flex: '1 1 50%',
                                    background: 'linear-gradient(145deg, #569CF9 0%, #094BB0 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: 6,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Animated background shapes */}
                                {[...Array(3)].map((_, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            position: 'absolute',
                                            width: ['120%', '140%', '160%'][i],
                                            height: ['120%', '140%', '160%'][i],
                                            background: `radial-gradient(circle, rgba(255,255,255,${0.05 - i * 0.02}) 0%, transparent 70%)`,
                                            animation: `pulse ${8 + i * 2}s ease-in-out infinite`,
                                            '@keyframes pulse': {
                                                '0%, 100%': { transform: 'scale(1)' },
                                                '50%': { transform: 'scale(1.1)' },
                                            },
                                        }}
                                    />
                                ))}

                                <Zoom in={true} timeout={1500}>
                                    <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 700,
                                                color: 'white',
                                                mb: 2,
                                                textShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                                fontSize: { md: '2.5rem', lg: '3rem' },
                                            }}
                                        >
                                            Welcome!
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'rgba(255,255,255,0.9)',
                                                mb: 4,
                                                lineHeight: 1.6,
                                                fontWeight: 400,
                                            }}
                                        >
                                            Sign up to write and execute queries on your own data securely.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                mb: 4,
                                                gap: 2,
                                            }}
                                        >
                                            {[PostAddIcon, CloudDoneIcon, AutoGraphIcon].map((Icon, index) => (
                                                <Avatar
                                                    key={index}
                                                    sx={{
                                                        bgcolor: 'rgba(255,255,255,0.2)',
                                                        width: 64,
                                                        height: 64,
                                                        animation: `bounce ${2 + index * 0.3}s ease-in-out infinite`,
                                                        '@keyframes bounce': {
                                                            '0%, 100%': { transform: 'translateY(0)' },
                                                            '50%': { transform: 'translateY(-10px)' },
                                                        },
                                                    }}
                                                >
                                                    <Icon sx={{ fontSize: 32, color: 'white' }} />
                                                </Avatar>
                                            ))}
                                        </Box>
                                    </Box>
                                </Zoom>
                            </Box>
                        )}
                    </Paper>
                </Grow>
            </Container>
        </Box>
    );
}