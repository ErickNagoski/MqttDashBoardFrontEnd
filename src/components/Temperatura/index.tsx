import {
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Stack,
    StackDivider,
    Stat,
    StatArrow,
    StatGroup,
    StatHelpText,
    StatLabel,
    StatNumber,
    Text,
    useBreakpoint,
    useBreakpointValue,
    VStack
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, AreaSeries, Borders, DiscreteColorLegend, } from 'react-vis';
import internal from 'stream';
import { format } from 'date-fns';
import axios from "axios";
import useSWR from 'swr';
import Api from '../../server/Api';

function Temperatura(): JSX.Element {
    const [indoorTemp, setIndoorTemp] = useState([{ x: 0, y: 0 }]);
    const [outdoorTemp, setOutdoorTemp] = useState([{ x: 0, y: 0 }]);

    async function getOutTemp(key: string) {
        const response = await Api.get(key, {
            headers: { 'Content-Type': 'application/json' }
        });
        if (outdoorTemp.length >= 24) {
            setOutdoorTemp([{ x: 0, y: response.data }]);
        } else {
            setOutdoorTemp(state => [...state, { x: state.length, y: response.data }]);
        }
        return response.data;
    }

    const {
        data: swrOutTemp,
        error: swrOutTempError,
        isValidating: swrOutTempValidating,
    } = useSWR('/outdoor/temperatura', getOutTemp, { refreshInterval: 1000 })

    async function getIndTemp(key: string) {
        const response = await Api.get(key, {
            headers: { 'Content-Type': 'application/json' }
        });
        if (indoorTemp.length >= 24) {
            setIndoorTemp([{ x: 0, y: response.data }]);
        } else {
            setIndoorTemp(state => [...state, { x: state.length, y: response.data }]);
        }
        return response.data;
    }

    const {
        data: swrIndTemp,
        error: swrIndTempError,
        isValidating: swrIndTempValidating,
    } = useSWR('/indoor/temperatura', getIndTemp, { refreshInterval: 1000 })
   
    return (
            <Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row', 'row']} bg='#F8F8F8' alignItems='flex-end'>
                <Box w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem'>
                    <Text fontSize='1.5rem' mb='1rem'>Temperatura</Text>
                    <Stack direction={['column', 'row', 'row']} h='auto' w='100%' divider={<StackDivider borderColor='gray.200' />}>
                        <Flex flexDirection={['row', 'column', 'column']} align='center' justify='space-between' w='20%'>

                            <Stat>
                                <StatLabel>Interna</StatLabel>
                                <StatNumber>{swrIndTemp}°</StatNumber>
                            </Stat>
                            <Stat>
                                <StatLabel>Externa</StatLabel>
                                <StatNumber>{swrOutTemp}°</StatNumber>
                            </Stat>

                        </Flex>
                        <XYPlot height={250} width={450} title={'Temperatura'} >

                            <XAxis tickTotal={10} />
                            <YAxis tickValues={[0, 10, 15, 20, 25, 30, 35, 40]} />

                            <LineSeries color={'blue'} data={indoorTemp} strokeWidth="5px" />
                            <LineSeries color={'orange'} data={outdoorTemp} strokeWidth="5px" />
                        </XYPlot>
                        <DiscreteColorLegend items={[{ title: 'interna', color: 'blue' }, { title: 'externa', color: 'orange' }]} />

                    </Stack>
                </Box>
            </Flex>
    )
}

export default Temperatura;