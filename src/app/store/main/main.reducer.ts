import { createReducer, on } from '@ngrx/store';
import { MainActions } from "./main.actions";
import { ICategories } from "../../models/categories.interface";
import { IGames } from "../../models/games.interface";
export namespace fromMain {
	export const mainFeatureKey = 'main';
	
	export interface IState {
		isLoading: boolean;
		language: string;
		isSearch: boolean;
		isFiltered: boolean;
		selectedCategory: string,
		fireStore:{
			categories: ICategories[],
			games: IGames[],
			searchGames: IGames[],
			filteredGames: IGames[],
		}
	}
	
	export const initialState: IState = {
		isLoading: false,
		language: '',
		isSearch: false,
		isFiltered: false,
		selectedCategory: '',
		fireStore:{
			categories: [],
			games: [],
			searchGames: [],
			filteredGames: [],
		}
	};
	
	export const reducer = createReducer(
		initialState,
		on(MainActions.fireGetAllCollectionsSuccess, (state, {response}) => ({
			...state, fireStore: response, isSearch: false, isFiltered: false, selectedCategory: '',
		})),
		on(MainActions.setLanguage, (state, {language}) => ({
			...state, language: language
		})),
		on(MainActions.getNextGames, (state) => ({
			...state, fireStore: {
				...state.fireStore,
				games:[...state.fireStore.games, ...state.fireStore.games]
			}
		})),
		on(MainActions.findGamesByName, (state, {name}) => ({
			...state,
			isSearch: true,
			isFiltered: false,
			fireStore:{
				 ...state.fireStore,
				searchGames: state.fireStore.games.filter((elem) => elem.name.includes(name))
			}
		})),
		on(MainActions.searchClear, (state) => ({
			...state,
			isSearch: false,
			isFiltered: false,
			selectedCategory: '',
			fireStore:{
				...state.fireStore,
				searchGames: []
			}
		})),
		on(MainActions.filterByCategory, (state, {category}) => ({
			...state,
			isFiltered: true,
			isSearch: true,
			selectedCategory: category,
			fireStore:{
				...state.fireStore,
				filteredGames: state.fireStore.games.filter((elem) => elem.category === category),
				searchGames: state.fireStore.games.filter((elem) => elem.category === category),
			}
		})),
	)}
