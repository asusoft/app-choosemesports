import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography, Link } from "@mui/material";
import BarItems from './components/barItems';

export default function SideBar() {
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
                    sx={{ borderBottom: "1.5px solid", borderColor: "#DBDCDC" }}
                    padding={"1.5rem"}
                >
                    
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
                <div className="scrollable-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
