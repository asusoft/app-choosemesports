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


export default function AddUniqueFiled({ isOpen, onClose }: CreateModalProps) {

    const { actions } = useSportContext()

    const [name, setName] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);


    const handleAddUniqueField = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        setIsLoading(true);
        const response = await actions.addUniqueField(name)

        if(response) return <Alert>{response.status}</Alert>

        setIsLoading(false)
        handleClose();
    };

    const clearAll = () => {
        setName('')
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
                        <Typography variant="h6">Add Required Field</Typography>
                    </FlexBetween>
                    <Box
                        sx={{
                            maxHeight: "calc(100vh - 100px)",
                            overflowY: "auto",
                            p: 2
                        }}
                    >
                        <form onSubmit={handleAddUniqueField}>
                            <Typography marginTop={'1.5rem'}>Title</Typography>
                            <TextField
                                required
                                fullWidth
                                label="Title"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Typography marginTop={'1.5rem'}>Stats</Typography>
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
