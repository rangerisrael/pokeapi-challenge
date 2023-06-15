import { fireEvent, render, screen } from '@testing-library/react';
import CardPaginate from '../component/features/pagination.component';


describe('Card pagination', () => {
	const start = 1;
	const end = 11;

	it('should fire previous button', () => {
		render(<CardPaginate start={1} end={10} length={20} />);

		const previousButton = screen.getByText('Previous');
		const spanaResult = screen.getByTestId('results');

		fireEvent.click(previousButton);

		expect(previousButton).toBeDisabled();
		expect(spanaResult).toHaveTextContent('1');
	});

	it('should fire next button', () => {
		render(<CardPaginate start={start} end={end} length={10} />);

		const nextButton = screen.getByText('Next');
		const spanaResult = screen.getByTestId('results');

		fireEvent.click(nextButton);

		expect(spanaResult).toHaveTextContent('Show results (2 - 11)');
	});

	it('should display  the result', () => {
		render(<CardPaginate start={start} end={end} length={10} onNext={() => end + 1} />);

		const nextButton = screen.getByText('Next');
		const spanaResult = screen.getByTestId('results');

		fireEvent.click(nextButton);

		expect(spanaResult).toHaveTextContent('Show results (2 - 11)');
	});
});
