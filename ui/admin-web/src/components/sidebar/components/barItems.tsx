import React, { useState } from "react";
import { Typography, Box } from "@mui/material";

import { useNavigate, useLocation } from 'react-router-dom';

import BarItem from "./barItem";
import { useViewer } from "@/entities/viewer";

export type barLink = {
  title: string,
  link: string
}

export default function BarItems() {

  const { actions } = useViewer()

  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname;

  const handleOnPress = async (item: barLink) => {
    await actions.logout()
    //navigate(item.link)
  }

  const barLinks = [
    { title: "Dashboard", link: "/" },
    { title: "Services", link: "services" },
    { title: "Projects", link: "projects" },
    { title: "Contacts", link: "contacts" },
    { title: "Quotes", link: "quotes" },
    { title: "News Letters", link: "newsletters" },

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
