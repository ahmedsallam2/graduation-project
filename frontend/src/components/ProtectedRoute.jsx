// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

// MUI
import FullPageSkeleton from "./FullPageSkeleton";

export default function ProtectedRoute({ children }) {
    const {
        isAuthenticated,
        isLoading,
        loginWithRedirect,
    } = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect({
                appState: {
                    returnTo: window.location.pathname,
                },
            });
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    if (isLoading || !isAuthenticated) {
        return <FullPageSkeleton />;
    }

    return children;
}
