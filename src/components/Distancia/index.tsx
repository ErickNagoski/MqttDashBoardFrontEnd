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

function Distancia(): JSX.Element {
    const [gateOpen, setGateOpen] = useState(false);

    async function getDistancia(key: string) {
        const response = await Api.get(key, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    }

    const {
        data: swrDistancia,
        error: swrDistError,
        isValidating: swrDistValidating,
    } = useSWR('/distancia', getDistancia, { refreshInterval: 100 })


    useEffect(() => {
        if (swrDistancia) {
            if (swrDistancia > 15) {
                setGateOpen(true);
            } else {
                setGateOpen(false);
            }
        }
    }, [swrDistancia])
    return (
        <Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row', 'row']} bg='#F8F8F8' >
            <Flex w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem' align='center' justify='space-evenly'>

                <Image src='https://cdn-icons-png.flaticon.com/512/1825/1825830.png' w='100px' />
                <Box w='70%' display='flex' alingItens='space-between' flexDirection='column'>
                    <Text fontSize='1.5rem' mb='1rem' >Portão da Garagem</Text>
                    <HStack w='100%' justify='space-evenly'>
                        <Text>Distância: {swrDistancia}</Text>
                        <Text fontSize='1.5rem' border='1px' borderRadius='0.8rem' bg={gateOpen ? 'green.200' : 'red.400'} color='#fff'>{gateOpen ? 'Aberto' : 'Fechado'}</Text>
                        <Button onClick={() => { setGateOpen(!gateOpen) }}><Text>{gateOpen ? 'Fechar' : 'Abrir'}</Text></Button>
                    </HStack>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Distancia;