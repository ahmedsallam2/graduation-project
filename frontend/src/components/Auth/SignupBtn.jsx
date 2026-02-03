import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'

export default function SignupBtn() {
    const { loginWithRedirect } = useAuth0()
    const styleBtn = {
        px: 3,
        py: 1,
        backgroundColor: "primary.contrastText",
        color: "primary.main",
        fontSize: { xs: "0.9rem", sm: "1rem" },
        fontWeight: "bold",
        borderRadius: 2,
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        },
        transition: "all 0.3s ease",
        minWidth: { xs: "180px", sm: "auto" },
    }

    return (
        <>
            <Button sx={styleBtn} variant="contained" size="large"
                onClick={() => loginWithRedirect({
                    appState: { returnTo: "/chat" },
                    screen_hint: "signup"
                })
                }>
                Sign Up
            </Button>
        </>
    )
}
