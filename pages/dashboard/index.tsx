import {
  Box,
  Button,
  Flex,
  HStack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack
} from '@chakra-ui/react'
import { useEffect } from 'react'
import mqttServer from '../../src/server/mqtt'

function DashBoard() {
  useEffect(() => {
    const mqtt = mqttServer()
  }, [])
  return (
    <Box w="100vw" h="100vh">
      <Flex w="50%" direction="column">
        <Text>Temperatura e Umidade</Text>
        <Box>
          <StatGroup>
            <Stat>
              <StatLabel>Temperatura Interna</StatLabel>
              <StatNumber>25°</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Umidade Interna</StatLabel>
              <StatNumber>2%</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
          <StatGroup>
            <Stat>
              <StatLabel>Temperatura Externa</StatLabel>
              <StatNumber>32°</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Umidade Externa</StatLabel>
              <StatNumber>1%</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
      </Flex>
      <Flex w="50%">
        <Stat>
          <StatLabel>Luminosidade</StatLabel>
          <StatNumber>0000</StatNumber>
          <StatHelpText>Horário: 13:00</StatHelpText>
        </Stat>
      </Flex>
      <Flex w="50%">
        <Stat>
          <StatLabel></StatLabel>
          <StatNumber>0000</StatNumber>
          <StatHelpText>Horário: 13:00</StatHelpText>
        </Stat>
      </Flex>
      <Flex w="50%" direction="column">
        <Text>Janelas</Text>
        <Flex alingItens="center" justify="space-evenly">
          <VStack>
            <Text
              border="1px solid"
              p="0.2rem"
              borderRadius="0.3rem"
              fontSize="1.2rem"
            >
              aberta
            </Text>
            <Button>
              <Text>Fechar</Text>
            </Button>
          </VStack>
          <Text>Janela 1</Text>
        </Flex>
        <Flex>
          <Text>Janela 2</Text>
        </Flex>
        <Flex>
          <Text>Janela 3</Text>
        </Flex>
        <Flex>
          <Text>Janela 4</Text>
        </Flex>
        <Flex>
          <Text>Janela 5</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default DashBoard
