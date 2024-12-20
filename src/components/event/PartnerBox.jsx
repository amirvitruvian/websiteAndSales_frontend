import React from "react";
import { Box, Typography, createTheme, ThemeProvider,} from "@mui/material";
import paulo from '../../assets/paulo.png'
import bruno from '../../assets/bruno.png'
import tayo from '../../assets/tayo.png'
import vahid from '../../assets/vahid.png'
import linkedin from '../../assets/LinkedIn 2.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/TwitterX.png'

const theme = createTheme({
    typography: {
        name: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '16px',
            color: "#54DBCF",
            letterSpacing: '0.4px',
            lineHeight: '19.2px',
        },
        detail: {
            fontFamily: 'Lato',
            fontWeight: 500,
            fontSize: '12px',
            color: "#FCFCFC",
            letterSpacing: '0.4px',
            lineHeight: '16px',
        },
        email: {
            fontFamily: 'Lato',
            fontWeight:400,
            fontSize: '10px',
            color: "#D9D9D9",
            lineHeight: '12px',
            letterSpacing: '0.4px',

        },
        
    },
});

const PartnerData = [
    {
      picture: paulo,
      name: 'Paulo Martins',
      detail: 'Management, sales, marketing, design, R&D',
      email: 'paulo.martins@vitruvianshield.com',
      linkedinUrl: 'https://www.linkedin.com/in/vitruvianshield/',
      instagramUrl: 'https://instagram.com',
      twitterUrl: 'https://x.com',
    },
    {
      picture: bruno,
      name: 'Bruno Carrilho',
      detail: 'General Manager',
      email: 'bruno.carrilho@vitruvianshield.com',
      linkedinUrl: 'https://www.linkedin.com/in/bruno-c-9a398926b/',
      instagramUrl: 'https://instagram.com',
      twitterUrl: 'https://x.com',
    },
    {
      picture: tayo,
      name: 'Mogboluwaga Otegbayo',
      detail: 'QA',
      email: 'tayo@vitruvianshield.com',
      linkedinUrl: 'https://www.linkedin.com/in/mogboluwaga-otegbayo/',
      instagramUrl: 'https://instagram.com',
      twitterUrl: 'https://x.com',
    },
    {
      picture: vahid,
      name: 'Vahid Khazaei Nezhad',
      detail: 'CTO',
      email: 'vahid@vitruvianshield.com',
      linkedinUrl: 'https://www.linkedin.com/in/vahid-khazaei-nezhad-a4074595/',
      instagramUrl: 'https://instagram.com',
      twitterUrl: 'https://x.com',
    },
  ];

  const PartnerCard = ({ picture, name, detail, email, linkedinUrl, instagramUrl, twitterUrl }) => {
    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '329px',
          width: '248px',
          p: '24px',
          borderRadius: '16px',
          backgroundColor: 'rgba(31, 31, 31, 1)',
          justifyContent: 'center',
          boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.32)',
          textAlign: 'start',
          border: '1px solid rgba(38, 38, 38, 1)',
        }}
      >
        <Box
        sx={{
            position: 'absolute',
            top: '48px',
            width: '120px',
            height: '120px',
            overflow: 'hidden',
        }}
        >
        <img
            src={picture}
            alt={name}
            style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            }}
        />
        </Box>

  
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '165px',
            textAlign: 'center',
            flexGrow: 1,
            width: '100%',
          }}
        >
          <Typography
            variant="name"
            sx={{
              width: '100%',
            }}
          >
            {name}
          </Typography>
          <Typography variant="detail" sx={{ width: '100%', marginTop: '10px' }}>
            {detail}
          </Typography>
  
        </Box>
          <Typography variant="email" sx={{ textAlign: 'center',width: '100%',marginBottom:'24px', marginTop: '16px' }}>
            {email}
          </Typography>
  
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            gap: 2,
            marginTop: 'auto',
          }}
        >
          {[
            { icon: linkedin, url: linkedinUrl },
            { icon: Instagram, url: instagramUrl },
            { icon: Twitter, url: twitterUrl },
          ]
            .filter((social) => social.url)
            .map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Box
                  component="img"
                  src={social.icon}
                  alt={`social-icon-${index}`}
                  sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(217, 217, 217, 1)',
                    padding: 0.25,
                  }}
                />
              </a>
            ))}
        </Box>
      </Box>
    );
  };

  


const PartnerBox = () =>{
    return(
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                height: '100%',
                justifyItems: "center",
                background: `linear-gradient(360deg, #323232 100%, #1F1F1F 60%)`,

                backgroundSize: "cover",
                backgroundPosition:"center",
                backgroundRepeat: "no-repeat",
                px: { xs: '40px', sm: '70px', md: '60px', lg: '80px', xl: '100px' },
                pb: { xs: '30px', sm: '40px', md: '80px', lg: '70px' },
                pt: { xs: '120px', sm: '140px', md: '170px' }
            }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        gap: '20px'

                    }}>
                    {PartnerData.map((box, index) => (
                        <PartnerCard
                            key={index}
                            picture={box.picture}
                            name={box.name}
                            detail={box.detail}
                            email={
                                <a
                                    href={`mailto:${box.email}`}
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {box.email}
                                </a>
                            }
                            linkedinUrl={box.linkedinUrl}
                          //  instagramUrl={box.instagramUrl}
                          //  twitterUrl={box.twitterUrl}
                        />
                    ))}
                </Box>

            </Box>
        </ThemeProvider>
    );
};

export default  PartnerBox;
