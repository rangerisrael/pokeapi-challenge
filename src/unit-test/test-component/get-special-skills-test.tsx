import axios from 'axios';
import { useState, useEffect } from 'react';
import { Stats } from '../../component/common/types/index';

export const PokeApiSpecialSkills = () => {
	const [pokeApi, setPokeApi] = useState<Stats[]>([]);
	useEffect(() => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) => {
			setPokeApi(res.data.stats);
		});
	}, []);
	return (
		<div>
			<ul>
				{pokeApi.map((item) => (
					<li role='listitem' key={item.stat.name}>
						{item.stat.name}
					</li>
				))}
			</ul>
		</div>
	);
};
