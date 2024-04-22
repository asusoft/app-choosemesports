import React from "react";
import { Typography, Grid, Paper } from "@mui/material";

type CardProps = {
    text: string, 
    value: number, 
    color: string, 
    onClick: () => void
}

export default function Card({ text, value, color, onClick } : CardProps) {
    return (
        <Grid item xs={12} sm={6} md={3} key={0} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"

        }}>
            <Paper
                component="div"
                onClick={onClick}
                display="flex" alignItems="cenetr" justifyContent="center" textAlign="ceneter" 
                sx={{
                    display: "flex",
                    textAlign: "center",
                    padding: "2rem 1.5rem",
                    flexDirection: "column",
                    height: "100%",
                    backgroundColor: color,
                    borderRadius: "12px",
                    "&:hover": {
                        transform: "scale(1.1)",
                        cursor: "pointer",
                        transition: "transform 0.3s ease-in-out"
                    }
                }}>
                <Typography fontSize="30px" fontWeight="bold" gutterBottom fontFamily="Rajdhani" style={{
                    marginTop: "1.5rem"
                }} color="#FFF">
                    {value || 0}
                </Typography>
                <Typography fontSize="18px" fontWeight="bold" gutterBottom fontFamily="Rajdhani" style={{
                    marginTop: "1.5rem",
                    marginBottom: "0.5rem"
                }} color="#FFF">
                    {text}
                </Typography>
            </Paper>
        </Grid>
    );
}
