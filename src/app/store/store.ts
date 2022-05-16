import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector, INIT,
	MetaReducer
} from '@ngrx/store';
import { environment } from "../../environments/environment";
import { fromMain } from "./main/main.reducer";
import { MainActions } from "./main/main.actions";

export interface State {
	[fromMain.mainFeatureKey]: fromMain.IState;
	
}

export const reducers: ActionReducerMap<State> = {
	[fromMain.mainFeatureKey]: fromMain.reducer,
	
};

export function restoreState(reducer: ActionReducer<State>): ActionReducer<State> {
	return (state, action) => {
		const currentActionType = action.type;
		const actionsNeedRestoreState = [
			MainActions.restoreAllState,
		];
		
		if (actionsNeedRestoreState.find(item => item.type === currentActionType)) {
			return reducer(undefined, {type: INIT});
		}
		return reducer(state, action);
	};
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [restoreState] : [restoreState];
