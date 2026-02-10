import React from 'react'
import { useRef, useState } from 'react';

//Components and Services
import emailjs from '@emailjs/browser';
import Notification from '../components/Notificaion';

//MUI
import {
    Box, Container, Grid, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider,
    Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';


export default function ContactUs() {

    // EmailJS setup and Notificaion
    const [notification, setNotification] = useState({
        open: false,
        message: '',
        severity: 'success',
    });
    const form = useRef();

    const PUBLIC_KEY = "hab74yyQUVd2GMjdJ"
    const SERVICE_ID = "service_lvc689b"
    const TEMPLATE_ID = 'template_hf9g7wf'

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setNotification({
                        open: true,
                        message: 'Message sent successfully!',
                        severity: 'success',
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setNotification({
                        open: true,
                        message: 'Failed to send message. Please try again.',
                        severity: 'error',
                    });
                },
            );
    };

    const styleField = {
        flex: 1,
        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            fontSize: "0.95rem",
            "& textarea": {
                resize: "vertical",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
                borderWidth: "2px",
            },
        },

    }
    return (
        <>
            <Box
                component="main"
                sx={{
                    minHeight: '100vh',
                    bgcolor: 'grey.50',           // light background
                    pt: { xs: 6, md: 5 },
                    pb: { xs: 8, md: 12 },
                }}
            >
                <Container maxWidth="lg">

                    {/* Main  Section */}
                    <Grid container spacing={5} alignItems="center">
                        {/* Left - Image */}
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
                                    src="./../../public/contact-us.svg"
                                    alt="AI-powered database platform illustration"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        // aspectRatio: '4 / 3',     // you can adjust
                                        objectFit: 'cover',
                                        transition: "transform 0.4s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                        },
                                    }}
                                />
                            </Card>
                        </Grid>
                        {/* Right - Text (form) */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                    lineHeight: 1.1,
                                    mb: 2,
                                    color: 'primary.main',
                                }}
                            >
                                Contact Us
                            </Typography>

                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{ maxWidth: '100%', mb: 2 }}
                            >
                                Have questions or want to learn more? We're here to help!
                            </Typography>
                            <Box
                                component="form"
                                ref={form}
                                onSubmit={sendEmail}
                                sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField sx={styleField} id="name" label="Name" variant="outlined" />
                                <TextField sx={styleField} id="email" label="Email" variant="outlined" />
                                <TextField sx={styleField} id="message" label="Message" variant="outlined" multiline rows={4} />
                                <Button type="submit" value="Send" variant="contained" color="primary" sx={{ mt: 2, px: 4, py: 1.25, fontSize: "1.2rem", borderRadius: 2, boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)", "&:hover": { boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)", transform: "translateY(-1px)" } }}>
                                    Send Message
                                </Button>
                            </Box>

                        </Grid>

                    </Grid>

                </Container>
            </Box>
            {/* Notificaion */}
            <Notification
                open={notification.open}
                message={notification.message}
                severity={notification.severity}
                onClose={() =>
                    setNotification((prev) => ({ ...prev, open: false }))
                }
            />
        </>
    )
}
