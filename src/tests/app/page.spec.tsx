import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('should be able to render page', () => {
    render(<Home />);

    expect(
      screen.getByRole('img', {
        name: /image notebook/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /nosso serviço tem como foco praticidade e comodidade/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/serviços disponíveis para:/i)).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /windows blue logo/i,
      }),
    ).toBeInTheDocument();
  });
});
