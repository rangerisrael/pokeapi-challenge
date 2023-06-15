type Pagination = {
	start: number;
	end: number;
	length: number;
	onPrevious?: () => void;
	onNext?: () => void;
};

 type PokeApi = { id: number; species: string; src: string; type: Types[]; stats?: Stats[] };



export type { Pagination, PokeApi };