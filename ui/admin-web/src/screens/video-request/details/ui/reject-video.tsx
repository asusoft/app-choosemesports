import React from "react";
import {
    Modal,
    Box,
    TextField,
    Button,
    Typography,
    Alert,
    List,
    ListItem,
    Checkbox
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useRequestContext } from "../model";
import { VRejectionReason } from "@/shared/generated/graphql/graphql";
import FlexBetween from "@/components/ui-lib/FlexBetween";
import CardButton from "@/components/ui-lib/CardButton";


export type CreateModalProps = {
    isOpen: boolean,
    onClose: () => void
}


export default function RejectVideo({ isOpen, onClose }: CreateModalProps) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [reason, setReason] = React.useState<VRejectionReason>(VRejectionReason.Duration)
    const { actions, isRejecting } = useRequestContext()

    const handleClose = () => {
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
                        <Typography variant="h6">Reject Video</Typography>
                    </FlexBetween>
                    <Box
                        sx={{
                            maxHeight: "calc(100vh - 100px)",
                            overflowY: "auto",
                            p: 2
                        }}
                    >
                        <Typography mb={1}>
                            Reason for Rejection:
                        </Typography>
                        <div role="group" aria-labelledby="sandwich-group">
                            <ListItem>
                                <Checkbox  
                                checked={reason === VRejectionReason.Duration}
                                onClick={() => setReason(VRejectionReason.Duration)} />
                                <Typography mb={1}>
                                   Duration (Video Too Long)
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Checkbox  
                                checked={reason === VRejectionReason.Quality}
                                onClick={() => setReason(VRejectionReason.Quality)}/>
                                <Typography mb={1}>
                                   Quality (Low quality video)
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Checkbox 
                                 checked={reason === VRejectionReason.ViolationOfPolicy}
                                 onClick={() => setReason(VRejectionReason.ViolationOfPolicy)} />
                                <Typography mb={1}>
                                  Violation Of Policy
                                </Typography>
                            </ListItem>
                            <CardButton text={"Submit"} onPress={() => actions.rejectVideo(reason)} />
                        </div>
                    </Box>
                   
                </Box>
                {isRejecting && (
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
