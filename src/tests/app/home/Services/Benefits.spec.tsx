import { Benefits } from '@/app/home/Services/Benefits';
import { render, screen } from '@testing-library/react';

describe('Benefits component', () => {
  it('should be able to render component', () => {
    render(<Benefits />);

    const texts = {
      primary: screen.getByText(
        /reconhecer seu token independente de qual seja o modelo\./i,
      ),
      secondary: screen.getByText(
        /acessar aos demais sites jurídicos do brasil/i,
      ),
      tertiary: screen.getByText(
        /realizar peticionamento eletrônico nos sistemas do e\-saj, pje, projudi, e etc\./i,
      ),
      quaternary: screen.getByText(/java na versão correta e configurado/i),
    };

    expect(texts.primary).toBeInTheDocument();
    expect(texts.secondary).toBeInTheDocument();
    expect(texts.tertiary).toBeInTheDocument();
    expect(texts.quaternary).toBeInTheDocument();
  });
});
