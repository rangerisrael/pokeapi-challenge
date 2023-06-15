import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../component/common/constant';

export const PokeApiListItems = () => {
	const [pokeApi, setPokeApi] = useState<string[]>([]);

	useEffect(() => {
		axios.get(`${API_URL}/pokemon`).then((res) => {
			setPokeApi(res.data.results.map((data: { name: string }) => data.name));
		});
	}, []);
	return (
		<div>
			<ul>
				{pokeApi.map((item) => (
					<li role='listitem' key={item}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
