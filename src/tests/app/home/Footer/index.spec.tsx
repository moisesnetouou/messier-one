import { Footer } from '@/app/home/Footer';
import { render, screen } from '@testing-library/react';

describe('Footer component', () => {
  it('should be able to render component', () => {
    render(<Footer />);

    const createdByText = screen.getByText(/powered by delta/i);
    const navigationLinksToContact = screen.getByRole('navigation');
    const linkToContact = screen.getByRole('link', {
      name: /entre em contato/i,
    });

    expect(createdByText).toBeInTheDocument();
    expect(navigationLinksToContact).toBeInTheDocument();
    expect(linkToContact).toBeInTheDocument();
  });
});
