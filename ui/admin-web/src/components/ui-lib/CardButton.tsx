
import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom';

type CardButtonProps = {
    text: string,
    color?: string,
    onPress: () => void
}


export default function CardButton({ text, onPress, color }: CardButtonProps) {
    const navigate = useNavigate()
    return (
        <div style={{
            display: "flex",
            marginTop: "4rem"
        }}>
            <Box
                className="card--button"
                bgcolor={color ? color : "#48CAE4"}
                padding={"0.5rem 1.5rem"}
                onClick={onPress}
                sx={{
                    borderRadius: "10px",
                    fontFamily: "Rajdhani",
                    "&:hover": {
                    backgroundColor: "#48CAE4",
                    cursor: "pointer",
                    }
                }}
            >
                <Typography fontSize="20px" fontFamily="Sora" whiteSpace="nowrap" color="#fff">
                    {text}
                </Typography>
            </Box>
        </div>
    );
}