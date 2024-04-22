import React from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function Analytics({ }) {
    const navigate = useNavigate();

    return (
        <Grid container spacing={4} marginTop="2rem" direction={"row"}>
            <Card
                text={'Sports'}
                color="#FF7E4C"
                onClick={() => {
                    navigate("sports");
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                }}
            />
            <Card
                text={"Players"}
                color="#7D5DF4"
                onClick={() => {
                    navigate("players");
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                }}
            />
             <Card
                text={"Video Requests"}
                color="#29C995"
                onClick={() => {
                    navigate("video-requests");
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                }}
            />
            <Card
                text={2 ? "Contact" : "Contacts"}
                color="#28195C"
                onClick={() => {
                    navigate("contacts");
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                }}
            />
            <Card
                text={2 ? "Newsletter" : "Newsletters"}
                color="#28195C"
                onClick={() => {
                    navigate("newsletters");
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    });
                }}
            />
        </Grid>
    );
}
