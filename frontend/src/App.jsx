import "./App.css";
import "./styles/layout.css"
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages & Components
import WelcomePage from "./pages/WelcomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
// import LoginForm from "./components/Forms/LoginForm.jsx";
// import SignpuForm from "./components/Forms/SignupForm.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx"
import ChatPage from "./pages/ChatPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AddDatabasePage from "./pages/AddDatabasePage.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";

// Contexts
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { DatabaseProvider } from "./contexts/DatabaseContext.jsx";

// Matrial UI
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme/theme";
import CssBaseline from '@mui/material/CssBaseline';
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";



function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <DatabaseProvider>
            <CssBaseline />
            <Routes>
              <Route path="/" element={
                <MainLayout><WelcomePage /></MainLayout>} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact-us" element={
                <MainLayout><ContactUs /></MainLayout>
              } />
              <Route path="/how-it-works" element={<MainLayout><HowItWorks /></MainLayout>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={< SignupPage />} />
              <Route path="/chat" element={<ProtectedRoute ><ChatPage /> </ProtectedRoute >} />
              <Route path="/profile" element={<ProtectedRoute ><ProfilePage /> </ProtectedRoute >} />
              <Route path="/chat/addDatabase" element={<ProtectedRoute><AddDatabasePage /></ProtectedRoute>} />
              <Route path="*" element={<><h1>NOT FOUND 404</h1></>} />
            </Routes>
          </DatabaseProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
