import React from "react";
import {
    Typography,
    Box,
} from "@mui/material";

import { CheckCircleOutlineOutlined } from "@mui/icons-material";


export default function BulletPoint({ point } : {point: string}) {

    return (
        <Box display={'flex'} gap={'0.5rem'}>
            <CheckCircleOutlineOutlined sx={{ color: '#023E8A', fontSize: 24, marginTop: '0.2rem' }} />
            <Typography fontFamily={'livvic'}>{point}</Typography>
        </Box>
    )
}