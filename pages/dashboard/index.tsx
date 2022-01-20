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
import '../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, AreaSeries, Borders, DiscreteColorLegend, } from 'react-vis';
import internal from 'stream';
import { format } from 'date-fns';

import useSWR from 'swr';
import Api from '../../src/server/Api';
import Temperatura from '../../src/components/Temperatura';
import Umidade from '../../src/components/Umidade';
import Distancia from '../../src/components/Distancia';
import Luminosidade from '../../src/components/Luminosidade';

function DashBoard() {

  const [distancia, setDistancia] = useState(0);
  const [tempInterna, setTempInterna] = useState();
  const [tempExterna, setTempExterna] = useState();
  const [umidadeInterna, setUmidadeInterna] = useState();
  const [umidadeExterna, setUmidadeExterna] = useState();
  const [luminosidade, setLuminosidade] = useState(0);


  const [horario, setHorario] = useState('');

  const [indoorTemp, setIndoorTemp] = useState([{ x: 0, y: 0 }]);
  const [outdoorTemp, setOutdoorTemp] = useState([{ x: 0, y: 0 }]);

  const [indoorUmd, setIndoorUmd] = useState([{ x: 0, y: 0 }]);
  const [outdoorUmd, setOutdoorUmd] = useState([{ x: 0, y: 0 }]);
  return (
    <Box w="100vw" h="100vh" >
      < Flex w='100%' direction={['column', 'row', 'row']} >
        <Temperatura />
        <Umidade />
      </Flex>

      <Flex w='100%' direction={['column', 'row', 'row']}>
        <Luminosidade />
        <Distancia />
      </Flex>


    </Box >

  )
}

export default DashBoard
