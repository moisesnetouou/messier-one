import { Services } from '@/app/home/Services';
import { render, screen } from '@testing-library/react';

describe('Services section', () => {
  it('should be able to render section', () => {
    render(<Services />);

    const heading = screen.getByRole('heading', {
      name: /nosso serviço tem como foco praticidade e comodidade/i,
    });

    const description = screen.getByText(
      /sem precisar sair da sua casa, tudo feito de maneira remota, nosso serviço lhe garante que sua máquina vai ter a possibilidade de:/i,
    );

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
