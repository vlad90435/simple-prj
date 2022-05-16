import { ICategories } from "./categories.interface";
import { IGames } from "./games.interface";

export interface IFireStore{
	categories: ICategories[];
	games: IGames[];
	searchGames: IGames[];
	filteredGames: IGames[];
}
