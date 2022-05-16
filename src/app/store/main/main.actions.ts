import {createAction, props} from '@ngrx/store';
import { HttpErrorResponse } from "@angular/common/http";
import { IFireStore } from "../../models/fire-store.interface";

export namespace MainActions {
	export const setLanguage = createAction(
		'[Main] Set Language',
		props<{ language: string }>(),
	);
	export const findGamesByName = createAction(
		'[Main] Find Games By Name',
		props<{ name: string }>(),
	);
	export const filterByCategory = createAction(
		'[Main] Filter By Category',
		props<{ category: string }>(),
	);
	export const getNextGames = createAction(
		'[Main] Get Next Games',
	);
	export const searchClear = createAction(
		'[Main] Search Clear',
	);
	export const fireGetAllCollections = createAction(
		'[Main] Get All Collections',
	);
	export const fireGetAllCollectionsSuccess = createAction(
		'[Main] Get All Collections Success',
		props<{ response: IFireStore }>(),
	);
	export const fireGetAllCollectionsFailure = createAction(
		'[Main] Get All Collections Failure',
		props<{ error: HttpErrorResponse }>(),
	);
	export const restoreAllState = createAction(
		'[Main] Restore All State',
	);
}
