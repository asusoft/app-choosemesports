import React, { useState } from "react";
import { Typography, Box } from "@mui/material";

import { useNavigate, useLocation } from 'react-router-dom';

import BarItem from "./barItem";

export type barLink = {
  title: string,
  link: string
}

export default function BarItems() {

  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname;

  const handleOnPress = async (item: barLink) => {
    navigate(item.link)
  }

  const barLinks = [
    { title: "Dashboard", link: "/" },
    { title: "Sports", link: "sports" },
    { title: "Players", link: "players" },
    { title: "Video Requets", link: "video-requests" },
    { title: "Contacts", link: "contact" },
    // { title: "Scouts", link: "scouts" },

  ]
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      padding={"1.5rem 0rem 2.5rem 2.5rem"}
      gap={"1.5rem"}
    >
      {
        barLinks.map((item) => (
          <BarItem item={item} onClick={() => handleOnPress(item)} currentPath={currentPath} />
        ))
      }
    </Box>
  );
}
