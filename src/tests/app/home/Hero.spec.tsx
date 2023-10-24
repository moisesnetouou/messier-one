import { Hero } from '@/app/home/Hero';
import { render, screen } from '@testing-library/react';

describe('Hero component', () => {
  it('should be able to render component', () => {
    render(<Hero />);

    const image = screen.getByRole('img', {
      name: /image notebook/i,
    });

    const callToAction = screen.getByRole('link', {
      name: /entre em contato/i,
    });

    expect(image).toBeInTheDocument();
    expect(callToAction).toBeInTheDocument();
  });
});
