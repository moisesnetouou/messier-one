import { Flex, Image, Text } from '@chakra-ui/react';

export function SupportedPlatforms() {
  return (
    <Flex bg="gray.900" p="5" align="center" my="10" borderRadius="10">
      <Text
        fontSize={['sm', 'lg', 'lg']}
        color="white"
        p="2"
        borderRadius="10"
        fontWeight="semibold"
      >
        Serviços disponíveis para:
      </Text>

      <Flex direction="column" justify="center" align="center" ml="2">
        <Image src="/images/windows.png" alt="" width="3rem" height="3rem" />
        <Text color="blue.200">Windows</Text>
      </Flex>
    </Flex>
  );
}
