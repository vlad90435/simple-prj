import { createFeatureSelector, createSelector } from "@ngrx/store";
import { fromMain } from "./main.reducer";

export const selectMainState = createFeatureSelector<fromMain.IState>(
	fromMain.mainFeatureKey,
);
export namespace MainSelectors {
	export const selectMain = createSelector(
		selectMainState,
		(state: fromMain.IState) => state,
	);
	export const selectCategories = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.fireStore.categories,
	);
	export const selectGames = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.fireStore.games,
	);
	export const selectSearchedGames = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.fireStore.searchGames,
	);
	export const selectIsSearch = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.isSearch,
	);
	export const selectPopular = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.fireStore.games.length + 1,
	);
	export const selectCurrentLanguage = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.language,
	);
	export const selectMyCategory = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.selectedCategory,
	);
	export const selectMyGamesLength = createSelector(
		selectMainState,
		(state: fromMain.IState) => state.fireStore.games.length,
	);
}
