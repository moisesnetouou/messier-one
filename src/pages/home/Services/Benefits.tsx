import { SimpleGrid } from '@chakra-ui/react';

import { BoxText } from './BoxText';

export function Benefits() {
  return (
    <SimpleGrid
      columns={[1, 1, 2, 2]}
      spacing={[5, 10, 20, 20]}
      mt={['2rem', '5rem', '5rem']}
      fontSize={['md', 'md', 'lg', 'lg']}
      fontWeight="semibold"
    >
      <BoxText>
        Reconhecer seu token independente de qual seja o modelo.
      </BoxText>

      <BoxText>Acessar aos demais sites jurídicos do Brasil</BoxText>

      <BoxText>
        Realizar peticionamento eletrônico nos sistemas do e-SAJ, PJE, Projudi,
        e etc.
      </BoxText>

      <BoxText>Java na versão correta e configurado</BoxText>
    </SimpleGrid>
  );
}
