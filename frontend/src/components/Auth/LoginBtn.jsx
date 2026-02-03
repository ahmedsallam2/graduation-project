import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';

export default function LoginBtn() {
    const { loginWithRedirect } = useAuth0();
    const styleBtn = {
        px: 3,
        py: 1,
        fontSize: { xs: "0.9rem", sm: "1rem" },
        fontWeight: "bold",
        borderRadius: 2,
        borderWidth: 2,
        borderColor: "white",
        color: "white",
        "&:hover": {
            borderWidth: 2,
            borderColor: "white",
            backgroundColor: "rgba(255,255,255,0.1)",
            transform: "translateY(-2px)",
        },
        transition: "all 0.3s ease",
        minWidth: { xs: "180px", sm: "auto" },
    }
    return (
        <>
            <Button variant="outlined"
                color="secondary"
                size="large" sx={styleBtn}
                onClick={() => loginWithRedirect({
                    appState: {
                        returnTo: "/chat"
                    }
                })} >
                Log In
            </Button>
        </>
    )
}
