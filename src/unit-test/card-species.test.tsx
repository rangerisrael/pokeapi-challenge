import { render, screen } from '@testing-library/react';
import CardSpecies from '../component/common/Card';
import { startCase } from 'lodash';
import { vi } from 'vitest';


describe('Render card item', () => {
	it('should return pokemon card list', async () => {
		const onClick = vi.fn();

		const items = {
			id: 0,
			species: 'Bulbasaur',
			src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
			type: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
		};

		render(<CardSpecies item={items} onClickHandler={onClick} />);

		const content = `${startCase(items.species)} # ${items.id + 1}`;
		const imgRole = screen.getByTestId('cardImg');

		expect(screen.getByText(content));
		expect(imgRole).toHaveAttribute('src', items.src);
	});
});
