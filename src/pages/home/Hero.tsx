import { Flex, Heading, Img, Text } from '@chakra-ui/react';

export function Hero() {
  return (
    <Flex
      direction="column"
      w="100%"
      align="center"
      h={['100%', '100%', '100vh', '100vh']}
      justify="center"
    >
      <Heading
        textAlign="center"
        fontSize={['2xl', '3xl', '5xl', '5xl']}
        my={['2rem', '2rem', '0', '0']}
      >
        Bem-vindo ao{' '}
        <Text as="span" color="cyan.400">
          Messier One
        </Text>
      </Heading>

      <Flex
        w="100%"
        justify="space-around"
        mt={['0', '0', '6rem', '6rem']}
        direction={['column-reverse', 'column-reverse', 'row', 'row']}
      >
        <Flex
          p="1.5rem"
          w={['100%', '100%', '500px', '500px']}
          h="350px"
          direction="column"
          justify="space-between"
        >
          <Text fontSize={['lg', 'lg', 'xl', 'xl']}>
            Problemas na hora de configurar sua máquina pra realizar
            peticionamento? Na Messier One você tem a solução.
          </Text>

          <Text fontSize={['md', 'md', 'lg', 'lg']}>
            Realizamos a instalação e configuração completa de maneira remota
            para sua comodidade.
          </Text>

          <Text
            as="a"
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5599999999999"
            textAlign="center"
            bg="cyan.400"
            transition="background 0.6s"
            _hover={{ bg: 'cyan.800' }}
            color="white"
            w={['100%', '14rem', '14rem']}
            fontSize="lg"
            borderRadius="6"
            p="3"
            fontWeight="semibold"
            target="_blank"
            alignSelf={['center', 'center', 'flex-start', 'flex-start']}
          >
            Entre em Contato
          </Text>
        </Flex>

        <Img
          alignSelf="center"
          src="/images/pexel.png"
          alt=""
          w={['12rem', '12rem', '20rem', '20rem']}
          h={['12rem', '12rem', '20rem', '20rem']}
          borderRadius="10"
        />
      </Flex>
    </Flex>
  );
}
