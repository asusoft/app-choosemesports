import React from "react";
import {
    Modal,
    Box,
    TextField,
    Button,
    Typography,
    Alert
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSports } from "../model";
import { SportIn } from "@/shared/generated/graphql/graphql";
import FlexBetween from "@/components/ui-lib/FlexBetween";


export type CreateModalProps = {
    isOpen: boolean,
    onClose: () => void
}


export default function AddSport({ isOpen, onClose } : CreateModalProps) {
    const [sport, setSport] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const { actions } = useSports();
    

    const handleAddSport = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setIsLoading(true);

        const sportIn: SportIn = {
            name: sport
        }
      
        const response = await actions.addSport(sportIn)
        if(response) return <Alert>{response.status}</Alert>
        setIsLoading(false)
        handleClose();
       
    };

    const clearAll = () => {
        setSport('')
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
                        <Typography variant="h6">Add Sport</Typography>
                    </FlexBetween>
                    <Box
                        sx={{
                            maxHeight: "calc(100vh - 100px)",
                            overflowY: "auto",
                            p: 2
                        }}
                    >
                        <form onSubmit={handleAddSport}>
                            <TextField
                                required
                                fullWidth
                                label="Name"
                                margin="normal"
                                value={sport}
                                onChange={(e) => setSport(e.target.value)}
                            />
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
