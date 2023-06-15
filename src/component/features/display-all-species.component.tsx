import { isEmpty } from 'lodash';
import CardSpecies from '../common/Card';
import { CardType, Pagination, PokeApi } from '../common/types';
import { usePokeApiState } from '../common/utils/hooks/useGlobalState';

const DisplaySpecies = ({
	onClickHandler,
	start,
	end,
}: {
	onClickHandler: CardType['onClickHandler'];
	start: Pagination['start'];
	end: Pagination['end'];
}) => {
	const [pokeApi] = usePokeApiState();

	return (
		<div
			className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 2xl:w-[80%]  md:w-[100%]   sm:w-[50%] mx-auto grid-flow-row '
		>
			{!isEmpty(pokeApi) && pokeApi.length > 1 ? (
				pokeApi
					.slice(start, end)
					.map((item: PokeApi) => <CardSpecies key={item.id} item={item} onClickHandler={onClickHandler} />)
			) : (
				<div>
					<h1 className='font-bold'>No result found</h1>
				</div>
			)}
		</div>
	);
};

export default DisplaySpecies;
