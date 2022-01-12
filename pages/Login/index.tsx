import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack
} from '@chakra-ui/react'
import { FaKey } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useRouter } from 'next/router'


function Login() {
    const router = useRouter();
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Box border="1px solid grey" w="20vw" h="20vh">
        <VStack align="center" h='100%' justify='center'>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Icon as={MdEmail} fontSize="x-large" color="gray.300" />
              }
            />
            <Input type="tel" placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={
                <InputRightElement
                  children={
                    <Icon as={FaKey} fontSize="x-large" color="gray.300" />
                  }
                />
              }
            />
            <Input placeholder="Senha" />
          </InputGroup>
          <Button
          onClick={()=>{router.push('/dashboard')}}
          >
            <Text>Login</Text>
          </Button>
        </VStack>
      </Box>
    </Flex>
  )
}

export default Login
