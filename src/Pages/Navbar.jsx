import React, { useState, useCallback } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    IconButton,
    MenuItem,
    Drawer,
    Divider,
    Menu,
    Avatar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/redvslogo.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SignUpDialog from '../components/SignUp/SignUpDialog.jsx';
import { useAuth } from '../AuthContext.jsx';
import navhome from '../assets/navhome.png';
import navproducts from '../assets/navproducts.png';
import navcompany from '../assets/navcompany.png';
import navpartnership from '../assets/navpartnership.png';
import navnews from '../assets/navnews.png';
import navevent from '../assets/navevent.png';
import navabout from '../assets/navabout.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#eee',
    fontStyle: 'normal',
    lineHeight: '130%',
    textTransform: 'none'
}

const getActiveStyle = (path, location) => {
    const isActive = location.pathname === path || (
        path === '/products' && (
            location.pathname.startsWith('/products/mobile-app') ||
            location.pathname.startsWith('/products/dashboard') ||
            location.pathname.startsWith('/products/smart-watch')
        )
    );

    return {
        position: 'relative',
        '&::after': {
            fontWeight: 700,
            content: '""',
            position: 'absolute',
            width: '100%',
            top: '100%',
            height: '1.5px',
            bottom: 5,
            left: location.pathname === path ? '50%' : '42%',
            backgroundColor: isActive ? 'white' : 'transparent',
            transform: isActive ? 'translateX(-50%) scaleX(0.9)' : 'translateX(-50%) scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        '&:hover::after':
            path === '/products' && (
                location.pathname.startsWith('/products/mobile-app') ||
                location.pathname.startsWith('/products/dashboard') ||
                location.pathname.startsWith('/products/smart-watch')
            ) ? {} : {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                bottom: 5,
                left: '50%',
                top: '100%',
                backgroundColor: isActive ? 'white' : 'gray',
                transform: 'translateX(-50%) scaleX(0.9)',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
            },
    };
};

const Navbar = React.memo((props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [anchorElProduct, setAnchorElProduct] = useState(null);
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProductMenu = Boolean(anchorElProduct);
    const openProfileMenu = Boolean(anchorElProfile);
    const [isProductsOpen, setIsProductsOpen] = useState(false); // State to manage Products menu
    
    const toggleProductsMenu = () => {
        setIsProductsOpen((prev) => !prev); // Toggle the Products menu
    };
    
    const handleProductMenuOpen = (event) => {
        setAnchorElProduct(event.currentTarget);
        setAnchorElProfile(null); // بستن منوی پروفایل
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorElProfile(event.currentTarget);
        setAnchorElProduct(null); // بستن منوی محصولات
    };

    const handleMenuClose = () => {
        setAnchorElProduct(null);
        setAnchorElProfile(null);
    };

    const handleProfileClick = () => {
        navigate('/profile');
        handleMenuClose();
    };

    const handleLogout = () => {
        logout();
        handleMenuClose();
    };

    const pages = [
        { name: 'Home', path: '/', icon:navhome},
        { name: 'Products', icon:navproducts},
        { name: 'Company', path: '/company', icon:navcompany},
        { name: 'Partnership', path: '/partnership', icon:navpartnership},
        { name: 'News', path: '/news', icon:navnews},
        { name: 'Websummit 2024', path: '/event', icon:navevent},
        { name: 'About us', path: '/about', icon:navabout}
    ];

    const productItems = [
        { name: 'Mobile App', path: '/products/mobile-app' },
        { name: 'Web App', path: '/products/dashboard' },
        { name: 'Smart Watch', path: '/products/smart-watch' },
    ];

    const toggleDrawer = useCallback((open) => () => setDrawerOpen(open), []);
    const { authToken, logout } = useAuth(); // Using the useAuth hook

    return (
        <>
            <AppBar
                sx={{
                    position:'relative',
                    background: 'rgba(31, 31, 31, 0.95)',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
                    width: '100%',
                    height: { xs: '42px',sm:'52px', md: '96px' },
                    px: { xs: '24px', md: '30px', lg: '40px' },
                    justifyContent: 'center',
                }}>
                <Toolbar
                    sx={{
                        px: '0!important',
                        height: { xs: '42px',sm:'52px', md: '96px' },
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>

                    {/* Nav for mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start' }}>
                    <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                        <MenuIcon sx={{ color: 'white', fontSize: { xs: '32px',sm:'40px' }, mt: '2px' }} />
                    </IconButton>
                    <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)} sx={{display:{xs:'block',sm:'block',md:'none'}}}>
                        <Box sx={{ backgroundColor: '#1F1F1F' }}>
                            <Box sx={{width:'100%',display:'flex',p:'12.5px 22px 12.5px 24px' }}>
                            <Box
                            sx={{width:'100%',display:'flex'}}>
                            <Box
                                component="img"
                                src={logo}
                                alt="logo"
                                sx={{
                                    width: { xs: '24px',sm:'32px' ,md: '50.14px' },
                                    height: { xs: '34px',sm:'40px' ,md: '56px' },
                                }}
                            />  
                            <Typography sx={{ display:'flex',ml:1, alignItems:'center', fontFamily:'Lato', fontWeight:400,fontSize:'12px',lineHeight:'12px',color:'#FFF'}}>
                                Vitruvian Shield
                            </Typography>
                            </Box>
                            <Box sx={{ display: 'flex',mt:0.5, justifyContent: 'center',width:'24px',height:'24px',background:'#B503041A',borderRadius:'50%' }}>
                                <IconButton onClick={toggleDrawer(false)}>
                                    <CloseRoundedIcon sx={{ color: 'white', fontSize: 25, width:'16px',height:'16px' }} />
                                </IconButton>
                            </Box>
                            </Box>
                            <Box sx={{ backgroundColor: '#141414', p: "8px 0px 8px 8px", borderRadius: '0px 0px 16px 16px' }}>
                            {pages.map((page, index) => (
                                <React.Fragment key={page.path}>
                                    <MenuItem
                                        component={Link}
                                        to={page.path}
                                        onClick={page.name === 'Products' ? toggleProductsMenu : toggleDrawer(false)}
                                        sx={{
                                            color: '#ffffff',
                                            textTransform: 'none',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <img src={page.icon} alt={`${page.name} icon`} style={{ marginRight: 8 }} />
                                            {page.name}
                                        </Box>
                                        {page.name === 'Products' && <ExpandMoreIcon sx={{ color: '#ffffff' }} />} {/* Down arrow */}
                                    </MenuItem>

                                    {page.name === 'Products' && isProductsOpen && (
                                        <Box sx={{ maxHeight: '150px', transition: 'max-height 0.3s ease-in-out', overflow: 'hidden' }}>
                                            {productItems.map((item) => (
                                                <MenuItem
                                                    key={item.path}
                                                    component={Link}
                                                    to={item.path}
                                                    onClick={() => handleProductSelect(item.path)} // Close drawer and navigate when a product is selected
                                                    sx={{
                                                        color: '#ffffff',
                                                        textTransform: 'none',
                                                        pl: 4 // Indent product items
                                                    }}
                                                >
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Box>
                                    )}

                                    {/* Add divider after each page except the last one */}
                                    {index < pages.length - 1 && (
                                        <Divider sx={{ marginLeft: 2, width: '90%', mt: 1.5, height: '1px', backgroundColor: '#4545454D' }} />
                                    )}
                                </React.Fragment>
                            ))}
                            </Box>
                            {/* <MenuItem>
                                {authToken ? (
                                    <>
                                        <Button
                                            variant="outlined"
                                            onClick={handleProfileClick}
                                            sx={{ color: '#ffffff', borderColor: '#B50304', fontSize: '15px' }}
                                        >
                                            Profile
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={handleLogout}
                                            sx={{ color: '#ffffff', borderColor: '#B50304', fontSize: '15px' }}
                                        >
                                            Log out
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        variant="outlined"
                                        onClick={() => setDialogOpen(true)}
                                        fullWidth
                                        sx={{ color: '#ffffff', borderColor: '#B50304', fontSize: '15px' }}
                                    >
                                        Sign Up/Login
                                    </Button>
                                )}
                            </MenuItem> */}
                        </Box>
                    </Drawer>
                    </Box>

                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': { backgroundColor: 'transparent' },
                            }}
                            disableRipple
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="logo"
                                sx={{
                                    width: { xs: '22px',sm:'32px' ,md: '50.14px' },
                                    height: { xs: '32px',sm:'40px' ,md: '56px' }, // Adjusted for correct height
                                }}
                            />
                        </Button>
                    </Box>

                    {/* Nav for Desktop */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        justifyContent: 'start',
                        ml: { xs: '10px', md: '15px', lg: '30px' },
                        gap: { xs: '10px', md: '25px', lg: '35px' },
                    }}>
                        {pages.map((page) =>
                            page.name === 'Products' ? (
                                <>
                                    <Button
                                        key={page.name}
                                        component={Link}
                                        color="inherit"
                                        onClick={handleProductMenuOpen}
                                        sx={{
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            textTransform: 'none',
                                            ...navItemStyle,
                                            ...getActiveStyle(page.path, location),
                                        }}
                                        disableRipple
                                    >
                                        {page.name}
                                        <ArrowDropDownIcon sx={{ ml: 0.5 }} />
                                    </Button>
                                    <Menu
                                        anchorEl={anchorElProduct}
                                        open={openProductMenu}
                                        onClose={handleMenuClose}
                                        PaperProps={{
                                            sx: {
                                                bgcolor: 'rgba(31, 31, 31, 0.95)',
                                                color: 'white',
                                                minWidth: '130px',
                                                justifyContent: 'space-between',
                                                textAlign: 'center',
                                            },
                                        }}
                                    >
                                        {productItems.map((item) => (
                                            <MenuItem
                                                key={item.path}
                                                component="a"
                                                href={item.path}
                                                onClick={handleMenuClose}
                                                sx={{
                                                color: '#ffffff',
                                                textTransform: 'none',
                                                ...navItemStyle,
                                                "&:hover": {
                                                    backgroundColor: 'rgba(38, 38, 38, 0.95)',
                                                    fontSize: '16.5px'
                                                }
                                                }}
                                            >
                                                {item.name}
                                            </MenuItem>
                                            ))}

                                    </Menu>
                                </>
                            ) : (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    disabled={page.disabled}
                                    sx={{
                                        ...navItemStyle,
                                        color: page.disabled ? 'rgba(255,255,255,0.40)' : '#ffffff',
                                        ...getActiveStyle(page.path, location),
                                        fontWeight: `${location.pathname.split('/')[0] === page.path ? 600 : 500}`
                                    }}
                                    disableRipple
                                >
                                    {page.name}
                                </Button>
                            )
                        )}
                    </Box>

                    {/* Profile and Sign in */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                        {authToken ? (
                            <>
                                <Avatar
                                    onClick={handleProfileMenuOpen}
                                    size='large'
                                    sx={{ cursor: 'pointer', width: {xs:'25px',sm:'35px',md:'50px'}, height: {xs:'25px',sm:'35px',md:'50px'}, mr: '0.5vw',border: '2px solid #B0EEE9',boxShadow: '0px 0px 5px 0px #8AE6DE99', }}
                                />
                                <Menu
                                    anchorEl={anchorElProfile}
                                    open={openProfileMenu}
                                    onClose={handleMenuClose}
                                    PaperProps={{
                                        sx: {
                                            bgcolor: '#141414',
                                            color: 'white',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            minWidth: 100,
                                            justifyContent: 'space-between',
                                            textAlign: 'center',
                                        },
                                    }}
                                >
                                  {/*<MenuItem onClick={handleProfileClick}>Profile</MenuItem>*/}
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={() => setDialogOpen(true)}
                                sx={{
                                    ml: { md: -1, lg: 1.2 },
                                    backgroundColor: '#B50304',
                                    padding: 0,
                                    minWidth: 0,
                                    borderRadius: '4px',
                                    textTransform: 'none',
                                    width: {xs:'78px',sm:'100px',md:'139px'},
                                    height: {xs:'22px',sm:'29px',md:'38px'},
                                    fontSize: { xs: '8px',sm:'11px', md: '14px', lg: '14.22px' },
                                    fontWeight: 600,
                                    fontFamily: 'Lato',
                                    '&:hover': {
                                        backgroundColor: '#B50304',
                                        opacity: '0.9'
                                    },
                                }}
                                disableRipple
                            >
                                Sign Up/ Login
                            </Button>
                        )}

                    </Box>


                </Toolbar>
            </AppBar>
            {
                dialogOpen && <SignUpDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />

            }
        </>
    );
});

export default Navbar;
