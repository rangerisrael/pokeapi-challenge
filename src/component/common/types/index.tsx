declare global {
	interface Window {
		my_modal_2: {
			showModal: () => void;
		};
	}
}

type Pagination = {
	start: number;
	end: number;
	length: number;
	onPrevious?: () => void;
	onNext?: () => void;
};


type BaseStat = { base_stat: number };

type Stat = { name: string; url?: string };


type GetBaseStat = { stat: Stat } & BaseStat;
 
type Stats = { base_stat: number; effort: number; stat: Stat };

type Types = { slot?: number; type: Stat };


type PokeApi = { id: number; species: string; src: string; type: Types[]; stats?: Stats[] };

type CardType = {
	onClickHandler: (item: PokeApi) => void;
	item: PokeApi;
};

 type ImageType = {
		src: string;
 } & React.ImgHTMLAttributes<HTMLImageElement>;



export type { Stats, Types, Pagination, PokeApi, ImageType, CardType, Stat, GetBaseStat };
