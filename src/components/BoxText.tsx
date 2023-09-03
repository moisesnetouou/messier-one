import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BoxTextProps {
  children: ReactNode;
}

export function BoxText({ children }: BoxTextProps) {
  return (
    <Flex
      bg="transparent"
      padding="1.5rem"
      border="1px solid #eaeaea"
      rounded="0.625rem"
      w={{ base: '100%', md: '18.75rem', lg: '25rem' }}
      height="7.5rem"
      align="center"
      justify="center"
      textAlign="center"
    >
      <Text>{children}</Text>
    </Flex>
  );
}
