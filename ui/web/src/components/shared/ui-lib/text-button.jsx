import { Box, Typography } from '@mui/material'

export default function TextButton({
    onClick,
    label,
    color,
    labelColor,
    align
}) {
    return (
        <Box
            display={'flex'}
            onClick={onClick}
            sx={{
                backgroundColor: color,
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                "&:hover": {
                    cursor: "pointer"
                },
                border: "2px solid",
                borderColor:  "#006B7D",
            }}
            alignItems={align}
            textAlign={'center'}
        >
            <Typography
                fontFamily="Rubik"
                fontSize="clamp(1rem, 1.2rem, 1.8rem)"
                color={labelColor}
                fontWeight='700'
                sx={{
                    "&:hover": {
                        cursor: "pointer"
                    },
                    flexWrap:'nowrap',
                    textAlign: 'center'
                }}
                flexWrap={'nowrap'}
            >
                {label}
            </Typography>
        </Box>
    )
}