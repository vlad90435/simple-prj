import { Store } from "@ngrx/store";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { MainActions } from "./main.actions";
import {  map, switchMap } from 'rxjs/operators';
import { FireCollectionsService } from "../../services/fire-collections.service";
import { tap } from "rxjs";
@Injectable()
export class MainEffects {
	
	public getAllCollections$ = createEffect( () => this.actions$.pipe(
		ofType( MainActions.fireGetAllCollections ),
		switchMap( () => this.fireStore.getItems().pipe(
			map( response => MainActions.fireGetAllCollectionsSuccess( {response} ) ),
		) ),
	) );
	public getAllCollectionsSuccess$ = createEffect(() => this.actions$.pipe(
		ofType(MainActions.fireGetAllCollectionsSuccess),
		tap(({response}) => {
			console.log('load success')
			
		}),
	), {dispatch: false});
	public  getAllCollectionsFailure$ = createEffect(() => this.actions$.pipe(
		ofType(MainActions.fireGetAllCollectionsFailure),
		tap((message) => alert( message)),
	), {dispatch: false});
	
	constructor (private actions$: Actions,
	             private store$: Store,
	             private fireStore: FireCollectionsService) {
	}
}
