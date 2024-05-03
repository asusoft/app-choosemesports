import { Container } from '@src/component/ui-lib/containers/page-container'
import { DropdownInput } from '@src/component/ui-lib/inputs/DropdownInput'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { useViewer } from '@src/entities/viewer'
import { useTheme } from '@src/services/theme/hooks'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { usePosition } from '../model/use-positions'
import { PositionForm } from '@src/component/forms/position-form'
import { useAppNavigation } from '@src/navigations/hooks'


export const AddPositionScreen = () => {
    const { theme } = useTheme()
    const { viewer } = useViewer()
    const { handlers, selectedPosition, isLoading, myPositions } = usePosition()
    const navigation = useAppNavigation()

    const sport = viewer.sport
    const existingPositions = myPositions

    const [items, setItems] = useState<{ label: string; value: string }[]>([])
    const [positionId, setPositionId] = useState<string>('WITHOUT_THEME')

    useEffect(() => {
        const sportPositions = sport?.positions?.positions;
        
        if (sportPositions) {
            const filteredPositions = sportPositions.filter(position => {
                return !existingPositions?.some(existingPosition => existingPosition.name === position.name);
            });
    
            setItems(filteredPositions.map(position => ({
                label: position.name,
                value: position.id,
            })));
        } else {
            setItems([]);
        }
    }, [sport, existingPositions]);

    const onIDChange = (id: any) => {
        setPositionId(id)
        handlers.onSelectedPositionIdChange(id())
    }

    if (!sport) return null

    return (
        <Container>
            <Spacing />
            <View style={{ flex: 1 }}>
                <DropdownInput
                    items={[{ label: '— Not choosen —', value: 'WITHOUT_THEME' }, ...items]}
                    placeholder='Positions'
                    value={positionId}
                    setValue={onIDChange}
                    style={{
                        backgroundColor: theme.palette.background
                    }}
                />
                <Spacing value={20} steps={2} />
                <View style={{ flex: 1 }} >
                    {selectedPosition && (
                        <PositionForm
                            position={selectedPosition}
                            onSave={handlers.onAddSinglePosition}
                            onClose={() => { }}
                            isLoading={isLoading}
                        />
                    )}
                </View>
            </View>
        </Container>
    )
}

