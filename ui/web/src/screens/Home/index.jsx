import React from "react";
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import AppStoreIcon from "../../assets/LandingPage/icons/App-Store.png"
import GooglePlayIcon from "../../assets/LandingPage/icons/Google-Play.png"
import HeroApp from "../../assets/LandingPage/images/hero-app.png"

export default function HomeScreen() {
    const isMobile = useMediaQuery("(max-width:960px)");
    const { navigateTo } = useAppNavigation();
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            padding={!isMobile ? "0rem 15rem" : "0rem 1rem"}
            gap={'2rem'}
        >
            <Box
                marginTop={isMobile ? '3rem' : '4rem'}
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                justifyContent="space-between"
            >
               <Box
                    maxWidth={isMobile ? "80%" : "55%"}
                    display="flex"
                    alignSelf={isMobile ? 'center' : undefined}
                >
                    <img
                        src={HeroApp}
                        alt="Hero"
                        style={{ width: "100%", borderRadius: isMobile ? "0" : "10px", height: isMobile ? '600px' : '700px' }}
                    />
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'left'}
                    alignSelf={'center'}
                    maxWidth={isMobile ? "100%" : "40%"}
                    mb={isMobile ? "2rem" : "0"}
                    marginTop={isMobile ? "2rem" : "0"}
                >
                   {!isMobile && (
                    <>
                     <Typography
                        variant={isMobile ? "h4" : "h2"}
                        fontWeight="bold"
                        gutterBottom
                        fontSize={'3rem'}
                        fontFamily="Rubik, sans-serif"
                        color={"#006B7D"}
                        textAlign={'left'}
                    >
                        ChooseMeSports
                    </Typography>
                    <Typography
                        fontFamily="Rubik, sans-serif"
                        sx={{ color: "#000000" }}
                        textAlign={'left'}
                        fontSize={'22px'}
                    >
                        Showcase your sports talents, connect with scouts, and unlock new opportunities.
                    </Typography>
                    </>)}
                    <Box display={'flex'} gap={isMobile ? '0.5rem' : '1rem'} flexDirection={'row'}>
                        <Box marginTop={isMobile ? '0.5rem' : '2rem'}  maxWidth={isMobile ? '8rem' : '12rem'} flexDirection={'row'}>
                            <img
                                src={AppStoreIcon}
                                alt="app store"
                                style={{ width: "100%", borderRadius: isMobile ? "0" : "10px" }}
                            />
                        </Box>
                        <Box marginTop={isMobile ? '0.5rem' : '2rem'} maxWidth={isMobile ? '8rem' : '12rem'} flexDirection={'row'}>
                            <img
                                src={GooglePlayIcon}
                                alt="google play"
                                style={{ width: "100%", borderRadius: isMobile ? "0" : "10px" }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}


