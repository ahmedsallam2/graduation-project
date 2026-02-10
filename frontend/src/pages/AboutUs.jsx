import React from 'react';

// MUI
import {
    Box, Container, Grid, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@mui/material';

import Header from '../components/Header';

// Optional: for check icons (or use your own)
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function AboutUs() {
    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    minHeight: '100vh',
                    bgcolor: 'grey.50',           // light background
                    pt: { xs: 6, md: 8 },
                    pb: { xs: 8, md: 12 },
                }}
            >
                <Container maxWidth="lg">
                    {/* Hero / Main Intro Section */}
                    <Grid container spacing={5} alignItems="center">
                        {/* Left - Text */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    lineHeight: 1.1,
                                    mb: 3,
                                    color: 'primary.main',
                                }}
                            >
                                About Us
                            </Typography>

                            <Typography
                                variant="h5"
                                color="text.secondary"
                                paragraph
                                sx={{ maxWidth: '600px', mb: 4 }}
                            >
                                We simplify how people interact with databases — no complex SQL required.
                            </Typography>

                            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                                Our platform lets users easily upload and manage files, then instantly transform natural language questions into accurate SQL queries using powerful AI models.
                            </Typography>

                            <Typography variant="body1" paragraph>
                                We believe writing SQL should not be a barrier — whether you're a business analyst, student, marketer, or developer.
                            </Typography>
                        </Grid>

                        {/* Right - Image */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Card
                                elevation={6}
                                sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    bgcolor: 'primary.dark',
                                    position: 'relative',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/about-us.svg"           // ← adjust path if needed
                                    alt="AI-powered database platform illustration"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        aspectRatio: '4 / 3',     // you can adjust
                                        objectFit: 'cover',
                                        transition: "transform 0.4s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                        },
                                    }}
                                />
                            </Card>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: { xs: 8, md: 10 } }} />

                    {/* Features */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 6 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: 700, mb: 4, color: 'primary.main', }}
                        >
                            Key Features
                        </Typography>

                        <Grid container spacing={3}>
                            {[
                                "Upload & organize your files effortlessly",
                                "Convert natural language to precise SQL queries",
                                "AI-powered smart query generation",
                                "Beautiful, intuitive interface for everyone",
                                "Save hours of work and eliminate syntax errors",
                                "Secure cloud-based file storage using AWS S3"
                            ].map((feature, i) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                    <Card
                                        elevation={2}
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3,
                                            transition: 'all 0.2s',
                                            '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                                        }}
                                    >
                                        <CardContent sx={{ p: 3 }}>
                                            <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
                                                <ListItemIcon sx={{ minWidth: 40 }}>
                                                    <CheckCircleOutlineIcon color="primary" />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{ fontWeight: 500 }}
                                                />
                                            </ListItem>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Our Goal / Mission */}
                    <Card
                        elevation={3}
                        sx={{
                            borderRadius: 4,
                            overflow: 'hidden',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            p: { xs: 4, md: 6 },
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: 700, color: 'inherit' }}
                        >
                            Our Mission
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                maxWidth: '720px',
                                mx: 'auto',
                                fontWeight: 400,
                                lineHeight: 1.6,
                                opacity: 0.95,
                            }}
                        >
                            We are building a world where anyone — regardless of technical background — can ask questions about their data and get instant, accurate answers.
                            Less syntax. More insight.
                        </Typography>
                    </Card>
                </Container>
            </Box>
        </>
    );
}