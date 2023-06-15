import { render, screen } from '@testing-library/react';
import Header from '../component/common/Header';

describe('Header', () => {
	it('should logo display', () => {
		render(<Header />);
		const getImageSrc = screen.getByTestId('src');

		expect(getImageSrc).toHaveAttribute('src', '/src/assets/deeplink.png');
	});
	it('should heading display', () => {
		render(<Header />);
		expect(screen.getByText('Deepink Ventures'));
	});
	it('should subtitle display', () => {
		render(<Header />);

		expect(screen.getByText('Deep Ink Ventures Gmbh - Solmsstrave 11-10961 Berlin'));
	});
});
