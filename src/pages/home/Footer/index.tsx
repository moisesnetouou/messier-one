import { Flex, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillTriangleFill, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { RoundedLink } from './RoundedLink';

export function Footer() {
  return (
    <Flex
      as="footer"
      flex="1"
      padding="2rem 0"
      borderTop="1px solid #eaeaea"
      align="center"
      justify="space-around"
      direction={{ base: 'column', sm: 'row' }}
      mt="5rem"
    >
      <HStack align="center">
        <Text>Powered by Delta</Text>
        <Icon as={BsFillTriangleFill} />
      </HStack>

      <HStack align="center" my={{ base: '5', sm: '0' }}>
        <RoundedLink href="mailto:example@messierone.com.br" icon={MdEmail} />

        <RoundedLink
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5599999999999"
          icon={BsWhatsapp}
        />

        <RoundedLink
          href="https://www.instagram.com/examplemessierone/"
          icon={AiFillInstagram}
        />
      </HStack>

      <Link
        display="flex"
        alignItems="center"
        href="http://api.whatsapp.com/send?1=pt_BR&phone=5599999999999"
        bg="cyan.400"
        color="white"
        transition="background 0.6s"
        _hover={{ bg: 'cyan.800' }}
        p="3"
        rounded="10"
        fontWeight="semibold"
      >
        Entre em Contato
      </Link>
    </Flex>
  );
}
