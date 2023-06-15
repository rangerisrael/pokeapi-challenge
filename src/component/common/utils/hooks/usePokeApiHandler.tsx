import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constant';
import { PokeApi } from '../../types';
import { PokeResults, PokemonResponseUrl } from '../../types/api-interface';
import { usePokeApiState, usePokeResultByItself } from './useGlobalState';

const usePokeApiHandler = () => {

  
	const [pokeApi, setPokeApi] = usePokeApiState();
	const [, setResult] = usePokeResultByItself();

	const cloneSpecies: PokeApi[] = [];
	let thumbnail: string;

useEffect(() => {
	function fetch(): void {

		axios
			.get(`${API_URL}/pokemon`)
			.then((res: { data: { results: PokeResults[] } }) => {
				const pokemonUrls = res.data.results.map((item) => item?.url);

				const requests: Promise<{ data: PokemonResponseUrl}>[] = pokemonUrls.map((url: string) => axios.get(url));

				Promise.all(requests)
					.then((responses) => {
						responses.map((res, index) => {
							// eslint-disable-next-line react-hooks/exhaustive-deps
							thumbnail = res.data.sprites.other.dream_world.front_default;

							cloneSpecies.push({
								id: index,
								species: res.data.name,
								src: thumbnail,
								type: res.data.types,
								stats: res.data.stats,
							});
						});

						setPokeApi(cloneSpecies);
					})
					.catch((error) => {
						return (error as Error).message;
					});
			})
			.catch((error) => {
				return (error as Error).message;
			});
	}

	fetch();
}, []);


const length = pokeApi.length;
const [start, setStart] = useState<number>(0);
const [end, setEnd] = useState<number>(10);

const onNext = () => {
	if (end === length) {
		setEnd(length);
	}
	setStart((prev) => prev + 1);
	setEnd((prev) => prev + 1);
};

const onPrevious = () => {
	setStart((prev) => prev - 1);
	setEnd((prev) => prev - 1);
};


const onClickHandler = (item: PokeApi) => {
	window.my_modal_2.showModal();

	setResult(item);
};


  return { onPrevious, onNext,onClickHandler, length, start, end, pokeApi };
}

export default usePokeApiHandler;