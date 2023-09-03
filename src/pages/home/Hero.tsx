import Image from 'next/image';

export function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center md:h-full">
      <h1 className="text-center text-5xl font-bold md:my-8 md:text-3xl md:sm:text-2xl">
        Bem-vindo ao <span className="text-cyan-400">Messier One</span>
      </h1>

      <div className="mt-24 flex w-full justify-around sm:mt-0 sm:flex-col-reverse">
        <div className="flex h-[21.875rem] w-[31.25rem] flex-col justify-between p-[1.5rem] md:w-[21.875rem] md:sm:h-[20rem] md:sm:w-full">
          <p className="text-xl md:text-lg">
            Problemas na hora de configurar sua máquina pra realizar
            peticionamento? Na Messier One você tem a solução.
          </p>

          <p className="text-lg md:text-base">
            Realizamos a instalação e configuração completa de maneira remota
            para sua comodidade.
          </p>

          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5599999999999"
            className="w-[14rem] rounded-md bg-cyan-500 p-3 text-center text-lg font-semibold text-white transition-colors duration-500 hover:bg-cyan-700 sm:self-center xs:w-full"
          >
            Entre em Contato
          </a>
        </div>

        <div className="flex h-[20rem] w-[20rem] sm:h-[12rem] sm:w-[12rem] sm:self-center">
          <Image
            src="/images/pexel.png"
            alt="image notebook"
            width={3648}
            height={2788}
            blurDataURL="/images/pexel.png"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
