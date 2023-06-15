import { createGlobalState } from "react-use";
import { PokeApi } from "../../types";

export const usePokeApiState = createGlobalState<PokeApi[]>([{ id: 0, species: '', src: '', type: [], stats: [] }]);
export const usePokeResultByItself = createGlobalState<PokeApi>({ id: 0, species: '', src: '', type: [], stats: [] });