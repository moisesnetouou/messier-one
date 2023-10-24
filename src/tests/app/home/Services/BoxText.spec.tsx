import { BoxText } from '@/app/home/Services/BoxText';
import { render, screen } from '@testing-library/react';

describe('Box Text component', () => {
  it('should be able to render text', () => {
    render(<BoxText text="Vitest test" />);

    const text = screen.getByText('Vitest test');

    expect(text).toBeInTheDocument();
  });
});
