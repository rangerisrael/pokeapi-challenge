import { render, screen } from '@testing-library/react';
import { PokeApiListItems } from './test-component/display-species-test';

test('should render pokemon list items', async () => {
	render(<PokeApiListItems />);
	const pokeApi = await screen.findAllByRole('listitem');
	expect(pokeApi).toHaveLength(20);
});
