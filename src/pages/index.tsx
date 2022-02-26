import Head from 'next/head';
import {
  Icon,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Stack,
} from '@chakra-ui/react';
import { BsWhatsapp, BsFillTriangleFill } from 'react-icons/bs';

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
        h={['100%', '100vh', '100vh']}
        justify="center"
      >
        <Heading
          textAlign="center"
          fontSize={['2xl', '5xl', '5xl']}
          my={['2rem', '0', '0']}
        >
          Bem-vindo ao Messier One
        </Heading>

        <Flex
          w="100%"
          justify="space-around"
          mt={['0', '6rem', '6rem']}
          direction={['column-reverse', 'row', 'row']}
        >
          <Flex
            p="1.5rem"
            w={['100%', '500px', '500px']}
            h="350px"
            direction="column"
            justify="space-between"
          >
            <Text fontSize={['lg', 'xl', 'xl']}>
              Problemas na hora de configurar sua máquina pra realizar
              peticionamento? Na Messier One você tem a solução.
            </Text>

            <Text fontSize={['md', 'lg', 'lg']}>
              Realizamos a instalação e configuração completa de maneira remota
              para sua comodidade.
            </Text>

            <Text
              as="a"
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5592991146464"
              textAlign="center"
              bg="yellow.200"
              color="gray.900"
              w={['100%', '14rem', '14rem']}
              fontSize="md"
              borderRadius="6"
              p="2"
              fontWeight="semibold"
              target="_blank"
            >
              Entre em Contato
            </Text>
          </Flex>

          <Image
            alignSelf="center"
            src="/images/pexel.png"
            alt=""
            w={['12rem', '20rem', '20rem']}
            h={['12rem', '20rem', '20rem']}
            borderRadius="10"
          />
        </Flex>
      </Flex>

      <Flex
        direction="column"
        w="100%"
        my={['8rem', '0', '0']}
        h={['100%', '100vh', '100vh']}
        justify="center"
      >
        <Flex direction="column" align="center" px="1.5rem">
          <Heading fontSize={['2xl', '3xl', '3xl']}>
            Nosso serviço tem como foco praticidade e comodidade
          </Heading>

          <Text mt="1rem" fontSize={['md', 'lg', 'lg']}>
            Sem precisar sair da sua casa, tudo feito de maneira remota, nosso
            serviço lhe garante que sua máquina vai ter a possibilidade de:
          </Text>

          <SimpleGrid
            columns={[1, 2, 2]}
            spacing={[5, 20, 20]}
            mt={['2rem', '5rem', '5rem']}
            fontSize={['md', 'lg', 'lg']}
            fontWeight="semibold"
          >
            <Flex
              bg="transparent"
              padding="1.5rem"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w={['100%', '400px', '400px']}
              height="120px"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Text>
                Reconhecer seu token independente de qual seja o modelo.
              </Text>
            </Flex>

            <Flex
              bg="transparent"
              padding="1.5rem"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w={['100%', '400px', '400px']}
              height="120px"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Text>Acessar aos demais sites jurídicos do Brasil</Text>
            </Flex>

            <Flex
              bg="transparent"
              padding="1.5rem"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w={['100%', '400px', '400px']}
              height="120px"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Text>
                Realizar peticionamento eletrônico nos sistemas do e-SAJ, PJE,
                Projudi, e etc.
              </Text>
            </Flex>
            <Flex
              bg="transparent"
              padding="1.5rem"
              border="1px solid #eaeaea"
              borderRadius="10px"
              w={['100%', '400px', '400px']}
              height="120px"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Text>Java na versão correta e configurado</Text>
            </Flex>
          </SimpleGrid>

          <Text
            mt="10"
            fontSize="sm"
            color="red.300"
            bg="gray.900"
            p="2"
            borderRadius="10"
          >
            *Aviso: Esses serviços estão apenas disponiveis pra quem utiliza
            sistema operacional Windows, ainda não oferecemos suporte a Linux ou
            Mac.
          </Text>
        </Flex>
      </Flex>

      <Flex
        flex="1"
        padding="2rem 0"
        borderTop="1px solid #eaeaea"
        align="center"
        justify="space-around"
      >
        <Stack direction="row" align="center">
          <Text>Powered by Delta</Text>
          <Icon as={BsFillTriangleFill} />
        </Stack>

        <Text
          as="a"
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5592991146464"
        >
          <Icon as={BsWhatsapp} fontSize="xl" />
        </Text>
      </Flex>
    </Flex>
  );
}
