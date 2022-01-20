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


function Umidade(): JSX.Element {

    const [indoorUmd, setIndoorUmd] = useState([{ x: 0, y: 0 }]);
    const [outdoorUmd, setOutdoorUmd] = useState([{ x: 0, y: 0 }]);

    async function getOutUmd(key: string) {
        const response = await Api.get(key, {
            headers: { 'Content-Type': 'application/json' }
        });
        if (outdoorUmd.length >= 24) {
            setOutdoorUmd([{ x: 0, y: response.data }]);
        } else {
            setOutdoorUmd(state => [...state, { x: state.length, y: response.data }]);
        }
        return response.data;
    }

    const {
        data: swrOutUmd,
        error: swrOutUmdError,
        isValidating: swrOutUmdValidating,
    } = useSWR('/outdoor/umidade', getOutUmd, { refreshInterval: 1000 })

    async function getIndUmd(key: string) {
        const response = await Api.get(key, {
            headers: { 'Content-Type': 'application/json' }
        });
        if (indoorUmd.length >= 24) {
            setIndoorUmd([{ x: 0, y: response.data }]);
        } else {
            setIndoorUmd(state => [...state, { x: state.length, y: response.data }]);
        }
        return response.data;
    }

    const {
        data: swrIndUmd,
        error: swrIndUmdError,
        isValidating: swrIndUmdValidating,
    } = useSWR('/indoor/umidade', getIndUmd, { refreshInterval: 1000 })

    return (<Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row']} bg='#F8F8F8' alignItems='flex-end'>
        <Box w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem'>
            <Text fontSize='1.5rem' mb='1rem'>Umidade</Text>
            <Stack direction={['column', 'row', 'row']} h='auto' divider={<StackDivider borderColor='gray.200' />}>
                <Flex flexDirection={['row', 'column', 'column']} align='center' justify='space-between' w='20%'>

                    <Stat>
                        <StatLabel>Interna</StatLabel>
                        <StatNumber>{swrIndUmd}%</StatNumber>
                    </Stat>
                    <Stat>
                        <StatLabel>Externa</StatLabel>
                        <StatNumber>{swrOutUmd}%</StatNumber>
                    </Stat>

                </Flex>
                <XYPlot height={250} width={450} title={'Umidade'} >

                    <XAxis tickTotal={10} />
                    <YAxis tickTotal={10} />

                    <LineSeries color={'blue'} data={indoorUmd} strokeWidth="5px" />
                    <LineSeries color={'orange'} data={outdoorUmd} strokeWidth="5px" />
                </XYPlot>
                <DiscreteColorLegend items={[{ title: 'interna', color: 'blue' }, { title: 'externa', color: 'orange' }]} />

            </Stack>
        </Box>
    </Flex>)
}

export default Umidade;