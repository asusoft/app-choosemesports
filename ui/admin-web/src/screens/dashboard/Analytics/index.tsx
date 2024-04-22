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
                value={10}
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
                value={3}
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
                value={100}
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
                value={2}
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
                value={2}
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
