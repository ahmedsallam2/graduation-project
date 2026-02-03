import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

export default function ProtectedRoute({ children }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        // Redirect to login and preserve the current location so user can be returned after login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
