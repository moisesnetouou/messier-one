import { BoxText } from './BoxText';

export function Benefits() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-20 text-lg font-semibold md:grid-cols-1 md:gap-10 md:text-base md:sm:gap-5 xs:mt-8">
      <BoxText text="Reconhecer seu token independente de qual seja o modelo." />

      <BoxText text="Acessar aos demais sites jurídicos do Brasil" />

      <BoxText
        text="Realizar peticionamento eletrônico nos sistemas do e-SAJ, PJE, Projudi,
        e etc."
      />

      <BoxText text="Java na versão correta e configurado" />
    </div>
  );
}
