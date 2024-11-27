import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './Pages/Navbar';
import AppRoutes from './Routes';
import Footer from './Pages/Footer';
import { AuthProvider } from './AuthContext.jsx';
import "@fontsource/lato";
import './app.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollToTop from './ScrollToTop.jsx';


const App = () => {
    return (
        <Router>

            <AuthProvider>
                    <Navbar />
                <ScrollToTop />
                    <AppRoutes />
                    <Footer />
            </AuthProvider>
        </Router>
    );
};

export default App;
