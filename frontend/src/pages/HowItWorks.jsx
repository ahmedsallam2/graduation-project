import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// MUI
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";

// Images
import step1 from "./../../public/how it works/step1_add file.png";
import step2 from "./../../public/how it works/step2_ask enter the text.png";
import step3 from "./../../public/how it works/step3_Represenation result.png";

const steps = [
    {
        label: "Upload Your Files",
        description:
            "Upload your data files such as CSV, Excel, or JSON. The platform securely processes and prepares your data automatically.",
        img: step1,
    },
    {
        label: "Write Your Prompt",
        description:
            "Explain what you want to retrieve from your data using plain English. No SQL knowledge is required.",
        img: step2,
    },
    {
        label: "View the SQL Result",
        description:
            "The system instantly generates an optimized SQL query and displays the result in a clear and readable format.",
        img: step3,
    },
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1000,
                    mx: "auto",
                    my: { xs: 6, md: 10 },
                    px: { xs: 2, md: 0 },
                }}
            >
                <Typography
                    variant={isMobile ? "h5" : "h4"}
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'primary.main' }}
                >
                    How It Works
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: "auto", mb: 5 }}
                >
                    Follow these simple steps to turn your text into powerful SQL queries.
                </Typography>

                <Stepper
                    activeStep={activeStep}
                    alternativeLabel={!isMobile}
                    orientation={isMobile ? "vertical" : "horizontal"}
                    sx={{ mb: 5 }}
                >
                    {steps.map((step) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {activeStep === steps.length ? (
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5" gutterBottom>
                            You're all set! , Now you can start using the platform to explore your data with natural language queries.
                        </Typography>
                        <Box sx={{ mt: 5, gap: 3, display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            <Button variant="contained" onClick={handleReset}>
                                Start Over
                            </Button>
                            <Button
                                component={NavLink}
                                to="/chat"
                                variant="contained"          // أو "outlined" أو "text" حسب اللي عايزاه
                                color="primary"             // أو secondary, success, إلخ
                                // لو عايز style إضافي للـ active state
                                sx={{
                                    '&.active': {
                                        backgroundColor: 'primary.dark',   // لون أغمق شوية لما يكون active
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                Try It Now
                            </Button>
                        </Box>


                    </Box>
                ) : (
                    <Box sx={{ textAlign: "center" }}>
                        <Box
                            component="img"
                            src={steps[activeStep].img}
                            alt={steps[activeStep].label}
                            sx={{
                                width: "100%",
                                objectFit: "contain",
                                maxWidth: { xs: "100%", sm: 600 },
                                borderRadius: 3,
                                boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                                mb: 4,
                            }}
                        />

                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            {steps[activeStep].label}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                maxWidth: 600,
                                mx: "auto",
                                mb: 4,
                                lineHeight: 1.7,
                            }}
                        >
                            {steps[activeStep].description}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 4,
                                flexWrap: "wrap",
                                mb: 5,
                            }}
                        >
                            <Button
                                variant="outlined"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back
                            </Button>

                            <Button variant="contained" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    );
}
