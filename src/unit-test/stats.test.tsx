import { render, screen } from '@testing-library/react';
import { PokeApiSpecialSkills } from './test-component/get-special-skills-test';

test('should render stats', async () => {
	render(<PokeApiSpecialSkills />);
	const pokeApi = await screen.findAllByRole('listitem');
	expect(pokeApi.length).toBeGreaterThan(0);
});
