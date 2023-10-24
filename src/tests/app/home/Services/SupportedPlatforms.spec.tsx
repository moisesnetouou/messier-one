import { SupportedPlatforms } from '@/app/home/Services/SupportedPlatforms';
import { render, screen } from '@testing-library/react';

describe('Supported Platforms component', () => {
  it('should be able to render component', () => {
    render(<SupportedPlatforms />);

    const text = screen.getByText(/serviços disponíveis para:/i);
    const image = screen.getByRole('img', { name: /windows blue logo/i });
    const platform = screen.getByText(/windows/i);

    expect(text).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(platform).toBeInTheDocument();
  });
});
