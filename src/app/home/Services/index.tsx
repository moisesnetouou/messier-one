import { Benefits } from './Benefits';
import { SupportedPlatforms } from './SupportedPlatforms';

export function Services() {
  return (
    <div className="my-20 flex h-screen w-full flex-col justify-center md:my-32 md:h-full">
      <div className="flex flex-col items-center px-6">
        <h2 className="text-3xl font-bold md:text-2xl">
          Nosso serviço tem como foco praticidade e comodidade
        </h2>

        <p className="mt-4 text-lg md:text-base">
          Sem precisar sair da sua casa, tudo feito de maneira remota, nosso
          serviço lhe garante que sua máquina vai ter a possibilidade de:
        </p>

        <Benefits />

        <SupportedPlatforms />
      </div>
    </div>
  );
}
