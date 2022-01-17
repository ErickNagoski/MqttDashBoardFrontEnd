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
import mqttServer from '../../src/server/mqtt'
import '../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, AreaSeries, Borders, DiscreteColorLegend, } from 'react-vis';
import internal from 'stream';
import { format } from 'date-fns';
function DashBoard() {

  const [distancia, setDistancia] = useState(0);
  const [tempInterna, setTempInterna] = useState();
  const [tempExterna, setTempExterna] = useState();
  const [umidadeInterna, setUmidadeInterna] = useState();
  const [umidadeExterna, setUmidadeExterna] = useState();
  const [luminosidade, setLuminosidade] = useState(0);

  const [gateOpen, setGateOpen] = useState(false);
  const [horario, setHorario] = useState('');

  useEffect(() => {
    if (distancia > 0) {
      setGateOpen(true);
    }
  }, [distancia])
 

  const data = [
    { x: 0, y: 32 },
    { x: 1, y: 32 },
    { x: 2, y: 30 },
    { x: 3, y: 29 },
    { x: 4, y: 25 },
    { x: 5, y: 24 },
    { x: 6, y: 23 },
    { x: 7, y: 22 },
    { x: 8, y: 22 },
    { x: 9, y: 21 }
  ];
  const data2 = [
    { x: 0, y: 28 },
    { x: 1, y: 29 },
    { x: 2, y: 30 },
    { x: 3, y: 30 },
    { x: 4, y: 26 },
    { x: 5, y: 25 },
    { x: 6, y: 22 },
    { x: 7, y: 23 },
    { x: 8, y: 25 },
    { x: 9, y: 23 }
  ];
  return (
    <Box w="100vw" h="100vh" >
      <Button onClick={() => { mqttServer() }}>Teste</Button>
      <Flex w='100%' direction={['column', 'row', 'row']}>
        <Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row', 'row']} bg='#F8F8F8' alignItems='flex-end'>
          <Box w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem'>
            <Text fontSize='1.5rem' mb='1rem'>Temperatura</Text>
            <Stack direction={['column', 'row', 'row']} h='auto' w='100%' divider={<StackDivider borderColor='gray.200' />}>
              <Flex flexDirection={['row', 'column', 'column']} align='center' justify='space-between' h='100%'>

                <Stat>
                  <StatLabel>Interna</StatLabel>
                  <StatNumber>25°</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Externa</StatLabel>
                  <StatNumber>32°</StatNumber>
                </Stat>

              </Flex>
              <XYPlot height={250} width={300} title={'Temperatura'} >

                <XAxis tickTotal={10} />
                <YAxis tickTotal={10} />

                <LineSeries color={'blue'} data={data} strokeWidth="5px" />
                <LineSeries color={'orange'} data={data2} strokeWidth="5px" />
              </XYPlot>
              <DiscreteColorLegend items={[{ title: 'interna', color: 'blue' }, { title: 'externa', color: 'orange' }]} />

            </Stack>
          </Box>
        </Flex>
        <Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row']} bg='#F8F8F8' alignItems='flex-end'>
          <Box w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem'>
            <Text fontSize='1.5rem' mb='1rem'>Temperatura</Text>
            <Stack direction={['column', 'row', 'row']} h='auto' divider={<StackDivider borderColor='gray.200' />}>
              <Flex flexDirection={['row', 'column', 'column']} align='center' justify='space-between' h='100%'>

                <Stat>
                  <StatLabel>Interna</StatLabel>
                  <StatNumber>25°</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Externa</StatLabel>
                  <StatNumber>32°</StatNumber>
                </Stat>

              </Flex>
              <XYPlot height={250} width={300} title={'Temperatura'} >

                <XAxis tickTotal={10} />
                <YAxis tickTotal={10} />

                <LineSeries color={'blue'} data={data} strokeWidth="5px" />
                <LineSeries color={'orange'} data={data2} strokeWidth="5px" />
              </XYPlot>
              <DiscreteColorLegend items={[{ title: 'interna', color: 'blue' }, { title: 'externa', color: 'orange' }]} />

            </Stack>
          </Box>
        </Flex>
      </Flex>

      <Flex w='100%' direction={['column', 'row', 'row']}>
        <Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row', 'row']} bg='#F8F8F8' >
          <Flex w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem' align='center' >

            <Image src='https://cdn-icons-png.flaticon.com/512/3174/3174855.png' w='100px' />

            <Stat>
              <StatLabel>Luminosidade</StatLabel>
              <StatNumber>{luminosidade}</StatNumber>
              <StatHelpText>Horário: </StatHelpText>
            </Stat>
            <Text>{`${format( new Date(),'dd/MM/yyy : HH:mm')}`}</Text>
          </Flex>
        </Flex>
        <Flex w={['100%', '100%', '50%', '50%']} direction={['column', 'row', 'row']} bg='#F8F8F8' >
          <Flex w='100%' bg='#FFFFFF' p='1rem' border='6px' boxShadow='0 4px 24px 0 rgb(34 41 47 / 24%)' m='2rem' borderRadius='0.5rem' align='center' justify='space-evenly'>

            <Image src='https://cdn-icons-png.flaticon.com/512/1825/1825830.png' w='100px' />
            <HStack w='70%' justify='space-evenly'>
              <Text fontSize='1.5rem' border='1px' borderRadius='0.8rem' bg={gateOpen ? 'green.200' : 'red.400'} color='#fff'>{gateOpen ? 'Aberto' : 'Fechado'}</Text>
              <Button onClick={() => { setGateOpen(!gateOpen) }}><Text>{gateOpen ? 'Fechar' : 'Abrir'}</Text></Button>
            </HStack>
          </Flex>
        </Flex>
      </Flex>


    </Box >

  )
}

export default DashBoard
