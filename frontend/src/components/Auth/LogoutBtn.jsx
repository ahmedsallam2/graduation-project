import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutBtn() {
    const { logout } = useAuth0();
    return (
        <>
            <Button variant="outlined"
                onClick={() => logout()} >
                Log out
            </Button>
        </>
    )
}
