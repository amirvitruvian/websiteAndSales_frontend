import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import React, { useState } from "react";
import Adscc from "../../assets/adscc.png";
import CHUV from "../../assets/partner5.png";
import yas from "../../assets/yas.png";
import hug from "../../assets/hug.png";
import vaud from "../../assets/vaud.png";
import gilomen from "../../assets/partner4.png";
import analogdevices from "../../assets/analogdevices.png";
import azure from "../../assets/azure.png";
import santamaria from "../../assets/santamaria.png";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Category } from "@mui/icons-material";
import partnerBG from '../../assets/partnerBG.png';
import { Boxes } from "lucide-react";

const customTheme = createTheme({
    typography: {
        h1: {//our partner
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'24px',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        h2: {//box detail
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize:'16px',
            color: "#EEEEEE",
            letterSpacing: '0.4px',
        },
        h3: {//title
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: {xs:'12px',sm:'20px'},
            lineHeight: {xs:'12px',sm:'20px'},
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        h4: {//description
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: {xs:'10px',sm:'16px'},
            lineHeight: {xs:'10px',sm:'16px'},
            color: "#F1F1F1",
            letterSpacing: '0.4px',
        },
        h5: {//website
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: {xs:'10px',sm:'15px'},
            lineHeight: {xs:'12px',sm:'15px'},
            color: "#5EA5D4",
            letterSpacing: '0.4px',
        },
        
    },
});

const howData = [
    { title: 'ADSCC', description: "Development and Customer", image: Adscc ,Category: "Development",link:'https://adscc.ae/' },
    // { title: 'CHUV', description: "Development and Customer", image: CHUV ,Category: "Development",link:'https://www.chuv.ch/fr/neurologie/nlg-home/'},
    { title: 'YAS', description: "Development and Customer", image: yas ,Category: "Development",link:'https://yashealthcare.ae/services/'},
    { title: 'HUG', description: "Development and Customer", image: hug ,Category: "Development",link:'https://www.hug.ch/'},
    { title: 'Santa Maria Lisbon', description: "Development and Customer", image: santamaria ,Category: "Development",link:'https://www.ulssm.min-saude.pt/'},
    { title: 'VAUD', description: "Financial support", image: vaud ,Category: "Financial",link:'https://www.myvaud.ch/en/'},
    { title: 'Gilomen', description: "Financial support", image: gilomen ,Category: "Financial",link:'https://www.fiduciaire-gilomen.ch/'},
    { title: 'Analog Devices', description: "Technological", image: analogdevices ,Category: "Technological",link:'https://www.analog.com/en/index.html'},
    { title: 'Microsoft Azure', description: "Technological", image: azure ,Category: "Technological",link:'https://azure.microsoft.com/en-ca/'},
];

const GroupButton = () => {
    const [selectedTeam, setSelectedTeam] = useState("view_all");

    const handleToggle = (event, newSelected) => {
        if (newSelected !== null) {
            setSelectedTeam(newSelected);
        }
    };

    // Filter partners based on the selected category
    const filteredData = selectedTeam === "view_all"
        ? howData
        : howData.filter(box => {
            if (selectedTeam === "financial") return box.Category === "Financial"; // Example filter
            if (selectedTeam === "technological") return box.Category === "Technological"; // Example filter
            if (selectedTeam === "development") return box.Category === "Development"; // Example filter
            return false;
        });

    return (
        <ThemeProvider theme={customTheme}>
            <Box
            sx={{
                backgroundImage: `radial-gradient(97.15% 97.15% at 50% 2.85%, rgba(50, 50, 50, 0.5) 0%, rgba(31, 31, 31, 0.5) 100%), url(${partnerBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <Box
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    marginTop={5}
                    sx={{
                        display:{xs:'none',sm:'flex'}
                    }}
                >
                    <Typography sx={{ ...customTheme.typography.h1, mb: '1vw' }}>
                        OUR PARTNERS
                    </Typography>
                    <Typography sx={{ ...customTheme.typography.h2, mb: '2vw' }}>
                        Explore our trusted partners who help us deliver exceptional experiences
                    </Typography>
                </Box>
                
                <Box display="flex" justifyContent="center">
                    <Box 
                    sx={{
                        width:{xs:'300px',sm:'1024px'},
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent:{xs:'start',sm:'center'},
                        gap:{xs:'16px',sm:'64px'},
                        px:{xs:'0px',sm:'3vw'},
                        pt:'3vw',
                        pb:'5vw',
                        my:{xs:'32px',sm:3,md:0}
                    }}>
                        {filteredData.map((box, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: {xs:'142px',sm:'230px'},
                                    height: {xs:'164px',sm:'271px'},
                                    borderRadius: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: '#1F1F1FE5',
                                    border: '1px solid #1F1F1F',
                                    position: 'relative',
                                    boxShadow: '0px 4px 4px 0px #00000040',

                                }}
                            >
                                <Box
                                    component="img"
                                    src={box.image}
                                    alt={box.title}
                                    sx={{
                                        width: {xs:'142px',sm:'230px'},
                                        height: {xs:'80px',sm:'129px'},
                                        backgroundColor: '#FFFFFF',
                                        objectFit: 'contain',
                                        borderRadius: '16px 16px 0 0',
                                        padding: 3
                                    }}
                                />
                                <Box
                                    sx={{
                                        
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography sx={{ ...customTheme.typography.h3,mt:{xs:'16px',sm:'32px'} }} >
                                        {box.title}
                                    </Typography>
                                    <Typography sx={{ ...customTheme.typography.h4,mt:'8px' }}>
                                        {box.description}
                                    </Typography>
                                    <Typography 
                                    onClick={box.link ? () => window.open(box.link, "_blank") : null}
                                    sx={{ 
                                        ...customTheme.typography.h5, 
                                        mt: {xs:'12px',sm:'24px'}, 
                                        textDecoration: 'none', 
                                        cursor: box.link ? "pointer" : "default",
                                        transition: "background-color 0.3s, transform 0.3s",
                                        '&:hover': {
                                        cursor: box.link ? "pointer" : "default",  // Ensure pointer on hover if a link is present
                                        }, 
                                    }}
                                    >
                                    Visit Website
                                    </Typography>


                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default GroupButton;
