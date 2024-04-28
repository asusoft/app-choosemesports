import { useViewer } from "@src/entities/viewer"
import { PlayerPositionIn, Position, useAddPlayerPositionsMutation } from "@src/shared/generated/types/graphql"
import { useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/native"
import { useAppNavigation } from "@src/navigations/hooks";

export const usePosition = () => {
    const { viewer, actions } = useViewer()
    const navigation = useAppNavigation()
    const sport  = viewer.sport
    const isFocused = useIsFocused()
    const [addPlayerPositions] = useAddPlayerPositionsMutation()
    const [positions, setPositions] = useState<PlayerPositionIn[]>([]);
    const [selectedPosition, setSelectedPosition] = useState<Position | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setPositions([]);
        setSelectedPosition(undefined);
    }, [isFocused]);

    const onSelectedPositionIdChange = (positionIdToFind: string) => {
        const sportPositions = sport?.positions?.positions;
        const foundPosition = sportPositions?.find(position => position.id === positionIdToFind);
        
        if (foundPosition) {
            setSelectedPosition(foundPosition);
        } else {
            setSelectedPosition(undefined);
        }
    };

    const onAddSinglePosition = async (positionIn: PlayerPositionIn) => {
        const isPositionExists = positions.some(pos => pos.name === positionIn.name);
        
        if (!isPositionExists) {
            setIsLoading(true)
            setPositions(prevPositions => [...prevPositions, positionIn]);
            await addPlayerPositions({ variables: { data: { positions: [positionIn] } } })
            await actions.getMe()
            setIsLoading(false)
            navigation.goBack()
        } else {
            setSelectedPosition(undefined);
        }
    };

    return {
        handlers: {
            onSelectedPositionIdChange,
            onAddSinglePosition
        },
        positions,
        selectedPosition,
        isLoading
    };
};

