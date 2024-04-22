import React from "react";
import {
    Modal,
    Box,
    TextField,
    Button,
    Typography,
    Alert
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress"
import { CreateModalProps } from "../../ui/AddSport";
import FlexBetween from "@/components/ui-lib/FlexBetween";
import { useSportContext } from "../model";
import { PositionIn, StatIn } from "@/shared/generated/graphql/graphql";
import { StartSharp } from "@mui/icons-material";


export default function AddVacancy({ isOpen, onClose }: CreateModalProps) {

    const { actions } = useSportContext()


    // input PositionIn {
    //     sportID: String!
    //     name: String!
    //     stats: [StatIn!]!
    // }

    // input StatIn {
    //     name: String!
    // }

    const [name, setName] = React.useState("");
    const [stats, setStats] = React.useState<StatIn[]>([]);
    const [stat, setStat] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleAddStat = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (stat) {
            setStats((prevStats) => [...prevStats, { name: stat }]);
            setStat("");
        }
    };

    const handleRemoveStat = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, indexToRemove: number) => {
        event.preventDefault();
        setStats((prevStats) =>
            prevStats.filter((_, index) => index !== indexToRemove)
        );
    };


    const handleAddPosition = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setIsLoading(true);

        if (stats.length > 0) {
            await actions.addPosition(name, stats)

            setIsLoading(false)
            handleClose();
        } else {
            setIsLoading(false)
            alert("Add Stats!!! A position must have atleast one stat")
        }
    };

    const clearAll = () => {
        setName('')
        setStats([]);
        setStat('')
    }

    const handleClose = () => {
        clearAll()
        setIsLoading(false);
        onClose()
    }

    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "50%",
                    bgcolor: "background.paper",
                    boxShadow: 24
                }}
            >
                <Box
                    sx={{
                        filter: isLoading ? 'blur(4px)' : 'none',
                    }}
                >
                    <FlexBetween
                        display={"flex"}
                        sx={{
                            p: 2,
                            bgcolor: "background.paper",
                            boxShadow: 2,
                            position: "sticky",
                            top: 0,
                            zIndex: 1
                        }}
                    >
                        <Typography variant="h6">Add Position</Typography>
                    </FlexBetween>
                    <Box
                        sx={{
                            maxHeight: "calc(100vh - 100px)",
                            overflowY: "auto",
                            p: 2
                        }}
                    >
                        <form onSubmit={handleAddPosition}>
                            <Typography marginTop={'1.5rem'}>Name</Typography>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Typography marginTop={'1.5rem'}>Stats</Typography>
                            <ul className="size-list">
                                {stats.map((stat, index) => (
                                    <Box gap={"1rem"} display={'flex'}>
                                        <li key={index} className="size-item">
                                            {stat.name}
                                        </li>
                                        <button
                                            className="add-button"
                                            onClick={(event) => handleRemoveStat(event, index)}
                                        >
                                            X
                                        </button>
                                    </Box>

                                ))}
                            </ul>

                            <FlexBetween gap={"1.5rem"}>
                                <TextField
                                    fullWidth
                                    label="Stat"
                                    margin="normal"
                                    value={stat}
                                    onChange={(e) => setStat(e.target.value)}
                                />
                                <button onClick={handleAddStat}>Add Stat</button>
                            </FlexBetween>

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{ marginTop: "16px" }}
                            >
                                Save
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={() => handleClose()}
                                style={{ marginTop: "16px" }}
                            >
                                Cancel
                            </Button>
                        </form>
                    </Box>
                </Box>
                {isLoading && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(255, 255, 255, 0.8)"
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}
            </Box>
        </Modal>
    );
}
