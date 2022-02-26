import Head from 'next/head';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex maxW="1120" m="0 auto" color="white" direction="column">
      <Head>
      <title>Messier One</title>
        <meta name="description" content="Messier One, o amigo do Advogado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Flex
        direction="column"
        w="100%"
        align="center"
        h="100vh"
        justify="center"
      >
        <Heading fontSize="5xl">Bem-vindo ao Messier One</Heading>

        <Flex w="100%" justify="space-around" mt="6rem">
          <Flex
            p="2rem"
            w="500px"
            h="350px"
            direction="column"
            justify="space-between"
          >
            <Text fontSize="xl">
              Problemas na hora de configurar sua máquina para realizar peticionamento? Na Messier One
              você tem a solução.
            </Text>

            <Text>
              Realizamos a instalação e configuração completa 
              de maneira remota para sua comodidade.
            </Text>

            <Text
              as="a"
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5592991146464"
              textAlign="center"
              bg="green.300"
              color="gray.900"
              w="14rem"
              fontSize="md"
              borderRadius="6"
              p="2"
              fontWeight="semibold"
              target="_blank"
            >
              Entre em Contato
            </Text>
          </Flex>

          <Flex w="300px" bg="gray.100" borderRadius="2rem">
            
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" w="100%" h="100vh" justify="center">
        <Flex direction="column" align="center" p="1rem">
          <Heading margin="0 auto">
            Nosso serviço tem como foco praticidade e comodidade
          </Heading>

          <Text mt="1rem">
            Sem precisar sair da sua casa, tudo feito de maneira remota, após o
            serviço seu computador vai estar pronto para:
          </Text>

          <SimpleGrid columns={2} spacing={10} mt="5rem">
            <Box
              bg="transparent"
              height="100px"
              padding="1.5rem"
              textAlign="center"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w="400px"
            >
              Reconhecer seu token
            </Box>
            <Box
              bg="transparent"
              height="100px"
              padding="1.5rem"
              textAlign="center"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w="400px"
            >
              Acessar os demais sites jurídicos do Brasil
            </Box>

            <Box
              bg="transparent"
              height="100px"
              padding="1.5rem"
              textAlign="center"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w="400px"
            >
              Realizar peticionamento nos sistemas do eSaj, PJE, Projudi e etc.
            </Box>
            <Box
              bg="transparent"
              height="100px"
              padding="1.5rem"
              textAlign="center"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w="400px"
            >
              Navegadores com configuração própria para acessar e realizar
              peticionamentos
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>

      <Flex
        flex="1"
        padding="2rem 0"
        borderTop="1px solid #eaeaea"
        justify="center"
        align="center"
      >
        <Text
        >
          Powered by Delta
        </Text>
      </Flex>
    </Flex>
  );
}
