import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CardSpecies from "../component/common/Card";

it('should onclick handler fire and dialog box show', () => {

	const onClick = vi.fn();

	const items = {
		id: 0,
		species: 'Bulbasaur',
		src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
		type: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
	};

	render(<CardSpecies item={items} onClickHandler={onClick} />);

  const cardHandelr = screen.getByTestId('card');


	fireEvent.click(cardHandelr);

  expect(cardHandelr).toHaveTextContent('Bulbasaur');


});

