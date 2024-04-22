import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import BarItems from './components/barItems';
import { useViewer } from "@/entities/viewer";
import FlexBetween from "../ui-lib/FlexBetween";

export default function SideBar() {
    const { actions } = useViewer()

    const handleLogout = async () => {
        await actions.logout()
    }

    return (
        <div className="container">
            <Box
                sx={{ width: "15%", borderLeftWidth: 2, borderLeftColor: "grey", backgroundColor: '#E7FBFF' }}
                className="sidebar"
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={"1.5rem"}
                >
                    <Typography variant="h5" fontFamily={"Rajdhani"}>ChooseMeSports Admin</Typography>
                </Box>
                <BarItems />

                <Box
                    position={"absolute"}
                    bottom={"0px"}
                    right={"0px"}
                    left={"0px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ borderTop: "1.5px solid", borderColor: "#DBDCDC" }}
                    padding={"1.5rem"}
                    flexDirection={'column'}
                    gap={'1.5rem'}
                >
                    <Typography variant="body1" fontFamily={"Rajdhani"}>
                        Developed By{" "}
                        <Link
                            href="https://www.softsavvy.ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="#023E8A"
                            fontFamily={"Rajdhani"}
                            underline="hover"
                        >
                            SoftSavvy
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <main>
                <Box
                    bgcolor="#E7FBFF"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        zIndex: 100,

                    }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ borderBottom: "1.5px solid", borderColor: "#DBDCDC" }}
                    padding={"1.1rem 0rem"}
                >
                    <FlexBetween width={'95%'}>
                        <Box>
                            <Typography variant="h5" fontFamily={"Rajdhani"}>ChooseMeSports Admin</Typography>
                        </Box>
                        <Box 
                        bgcolor={'#48CAE4'} 
                        padding={"0.5rem 1.5rem"} 
                        display={'flex'} 
                        alignItems={'center'} 
                        justifyContent={'center'} 
                        alignSelf={'flex-end'}
                        sx={{
                            borderRadius: "10px",
                            fontFamily: "Rajdhani",
                            "&:hover": {
                            backgroundColor: "#48CAE4",
                            cursor: "pointer",
                            }
                        }}
                        >
                            <Typography
                                onClick={handleLogout}
                                fontFamily="Rajdhani"
                                fontSize="clamp(1rem, 1.2rem, 2rem)"
                                color={'#E7FBFF'}
                                sx={{
                                    "&:hover": {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                Logout
                            </Typography>
                        </Box>
                    </FlexBetween>
                </Box>
                <div className="scrollable-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
