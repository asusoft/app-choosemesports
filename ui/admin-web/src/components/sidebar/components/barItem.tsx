import React from "react";
import { Typography, Box } from "@mui/material";
import { barLink } from "./barItems";

type barItem = {
  item: barLink,
  onClick: () => void,
  currentPath: string
}

export default function BarItem({ item, onClick, currentPath }: barItem) {
  const isActive = () => {
    if (item.link === "/" && currentPath === "/") {
      return true;
    }

    return currentPath.startsWith("/" + item.link)
  };

  return (
    <Box
      onClick={onClick}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"0.5rem 0rem"}
      bgcolor={isActive() ? "#48CAE4" : "#E7FBFF"}
      sx={{
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        fontFamily: "Rajdhani",
        "&:hover": {
          backgroundColor: "#48CAE4",
          cursor: "pointer",
        }
      }}
    >
      <Typography
        fontFamily="Rajdhani"
        fontSize="clamp(1rem, 1.2rem, 2rem)"
        color={!isActive() ? "#48CAE4" : "#E7FBFF"}
        sx={{
          "&:hover": {
            color: "#E7FBFF"
          }
        }}
      >
        {item.title}
      </Typography>
    </Box>
  );
}
