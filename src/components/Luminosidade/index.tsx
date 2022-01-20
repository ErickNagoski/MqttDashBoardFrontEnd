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

function Luminosidade(): JSX.Element {

  const [horario, setHorario] = useState('');

  async function getLuminosidade(key: string) {
    const response = await Api.get(key, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
  }

  const {
    data: swrLuminosidade,
  } = useSWR('/luminosidade', getLuminosidade, { refreshInterval: 100 })

  useEffect(() => {
    setHorario(`${new Date().getHours()}:${new Date().getMinutes()}`)
  }, [swrLuminosidade])

  return (
    <Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row', 'row']} bg='#F8F8F8' >
      <Flex w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem' align='center' >

        <Image src='https://cdn-icons-png.flaticon.com/512/3174/3174855.png' w='100px' />

        <Stat>
          <StatLabel fontSize='1.5rem' mb='1rem'>Luminosidade</StatLabel>
          <StatNumber>{swrLuminosidade} Cd</StatNumber>
          <StatHelpText>Horário: {horario}</StatHelpText>
        </Stat>
      </Flex>
    </Flex>
  )
}

export default Luminosidade;