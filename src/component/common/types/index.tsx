type Pagination = {
	start: number;
	end: number;
	length: number;
	onPrevious?: () => void;
	onNext?: () => void;
};

type PokeApi = { id: number; species: string; src: string; type: Types[]; stats?: Stats[] };


  type CardType = {
		onClickHandler: (item: PokeApi) => void;
		item: PokeApi;
	};


export type { Pagination, PokeApi, CardType };