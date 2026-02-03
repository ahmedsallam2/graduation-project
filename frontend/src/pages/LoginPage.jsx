import React from 'react'
import { Link } from 'react-router-dom'
//Auth0
import { useAuth0 } from "@auth0/auth0-react";
// MUI
import { Button, Typography, Divider, Paper, Container, useTheme, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email'
import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

import { SocialIcon } from 'react-social-icons'

export default function LoginPage() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    // الألوان الأساسية من الملف مع إضافة ألوان تكميلية
    const colors = {
        primaryDark: '#094BB0',
        primary: '#0B4DB2',
        primaryLight: '#569CF9',
        secondary: '#FF6B6B',
        secondaryLight: '#FF9E7D',
        background: '#F8FAFF',
        textPrimary: '#2D3748',
        textSecondary: '#718096',
        white: '#FFFFFF',
        lightGray: '#E2E8F0'
    }

    const socialButtons = [
        {
            name: 'Google',
            network: 'google-oauth2',
            color: '#DB4437',
            icon: <GoogleIcon />
        },
        {
            name: 'GitHub',
            network: 'github',
            color: '#333333',
            icon: <GitHubIcon />
        },
        {
            name: 'Facebook',
            network: 'facebook',
            color: '#4267B2',
            icon: <FacebookIcon />
        },
        {
            name: 'Twitter',
            network: 'twitter',
            color: '#1DA1F2',
            icon: <TwitterIcon />
        }
    ]

    const { loginWithRedirect } = useAuth0()

    return (
        <Box
            sx={{
                background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primaryLight} 100%)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                py: 4
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        padding: isMobile ? 3 : 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                        backgroundColor: colors.white,
                        borderRadius: 3,
                        boxShadow: '0 10px 30px rgba(11, 77, 178, 0.15)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}
                >
                    {/* الشعار/العنوان */}
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: colors.primary,
                                mb: 1
                            }}
                        >
                            Welcome back to PixelsDB
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: colors.textSecondary,
                                maxWidth: '80%',
                                margin: '0 auto'
                            }}
                        >
                            Sign in to access your account and continue your creative journey
                        </Typography>
                    </Box>

                    {/* زر تسجيل الدخول بالإيميل */}
                    <Button
                        onClick={() => {
                            loginWithRedirect({
                                appState: { returnTo: "/chat" }
                            })
                        }}
                        fullWidth
                        variant="contained"
                        size="large"
                        startIcon={<EmailIcon />}
                        sx={{
                            py: 1.5,
                            background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryLight})`,
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: '1rem',
                            textTransform: 'none',
                            boxShadow: `0 4px 15px ${colors.primaryLight}40`,
                            '&:hover': {
                                background: `linear-gradient(90deg, ${colors.primaryDark}, ${colors.primary})`,
                                boxShadow: `0 6px 20px ${colors.primaryLight}60`,
                                transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Login with Email
                    </Button>

                    {/* فاصل "أو" */}
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', my: 1 }}>
                        <Divider sx={{ flex: 1, borderColor: colors.lightGray }} />
                        <Typography
                            variant="body2"
                            sx={{
                                px: 2,
                                color: colors.textSecondary,
                                fontWeight: 500
                            }}
                        >
                            Or continue with
                        </Typography>
                        <Divider sx={{ flex: 1, borderColor: colors.lightGray }} />
                    </Box>

                    {/* بديل: أزرار وسائل التواصل الاجتماعي باستخدام react-social-icons */}
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                            gap: 2,
                            width: '100%',
                            mt: 2
                        }}
                    >
                        {socialButtons.map((social) => (
                            <Button
                                key={social.name}
                                onClick={() => {
                                    loginWithRedirect({
                                        appState: { returnTo: '/chat' },
                                        authorizationParams: {
                                            connection: social.network
                                        }
                                    })
                                }}
                                variant="outlined"
                                size="large"
                                fullWidth
                                sx={{
                                    py: 1.5,
                                    borderRadius: 2,
                                    borderColor: colors.lightGray,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    color: colors.textPrimary,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: .2,
                                    '&:hover': {
                                        borderColor: social.color,
                                        backgroundColor: `${social.color}08`,
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 4px 12px ${social.color}20`
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {/* استخدام react-social-icons بشكل صحيح */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <SocialIcon
                                        network={social.network}
                                        style={{
                                            height: 24,
                                            width: 24,
                                            marginRight: isMobile ? 0 : 8
                                        }}
                                        bgColor={social.color}
                                    />
                                </Box>
                                {!isMobile && social.name}
                            </Button>
                        ))}
                    </Box>

                    {/* رسالة للهواتف المحمولة */}
                    {isMobile && (
                        <Typography
                            variant="caption"
                            sx={{
                                color: colors.textSecondary,
                                textAlign: 'center',
                                mt: -1
                            }}
                        >
                            Tap to sign in with social media
                        </Typography>
                    )}

                    {/* رابط التسجيل */}
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: colors.textSecondary,
                                display: 'inline'
                            }}
                        >
                            Don't have an account?{' '}
                        </Typography>
                        <Link
                            to="/signup"
                            style={{
                                textDecoration: 'none',
                                fontWeight: 600,
                                color: colors.primary,
                                borderBottom: `2px solid ${colors.primaryLight}`,
                                paddingBottom: 2
                            }}
                        >
                            Register here
                        </Link>
                    </Box>

                    {/* تفاصيل إضافية */}
                    <Typography
                        variant="caption"
                        sx={{
                            color: colors.textSecondary,
                            textAlign: 'center',
                            maxWidth: '80%',
                            mt: 2
                        }}
                    >
                        By signing in, you agree to our Terms of Service and Privacy Policy
                    </Typography>
                </Paper>

                {/* <Typography
                    variant="caption"
                    sx={{
                        display: 'block',
                        textAlign: 'center',
                        color: colors.white,
                        mt: 3,
                        opacity: 0.8
                    }}
                >
                    © {new Date().getFullYear()} PixelsDB. All rights reserved.
                </Typography> */}
            </Container>
        </Box>
    )
}