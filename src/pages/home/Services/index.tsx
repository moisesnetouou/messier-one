import { Flex, Heading, Text } from '@chakra-ui/react';

import { Benefits } from './Benefits';
import { SupportedPlatforms } from './SupportedPlatforms';

export function Services() {
  return (
    <Flex
      direction="column"
      w="100%"
      my={['8rem', '8rem', '5rem', '5rem']}
      h={['100%', '100%', '100%', '100vh', '100vh']}
      justify="center"
    >
      <Flex direction="column" align="center" px="1.5rem">
        <Heading fontSize={['2xl', '2xl', '3xl', '3xl']}>
          Nosso serviço tem como foco praticidade e comodidade
        </Heading>

        <Text mt="1rem" fontSize={['md', 'md', 'lg', 'lg']}>
          Sem precisar sair da sua casa, tudo feito de maneira remota, nosso
          serviço lhe garante que sua máquina vai ter a possibilidade de:
        </Text>

        <Benefits />

        <SupportedPlatforms />
      </Flex>
    </Flex>
  );
}
