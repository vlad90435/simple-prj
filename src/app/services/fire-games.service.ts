import { Injectable} from '@angular/core';
import {  Observable, } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireCollections } from './utils/fire-collections';
import { take } from 'rxjs/operators';
import { IGames } from "../models/games.interface";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root',
})
export class FireGamesService {
  public itemsCollection: Observable<IGames[]>;
  public items: Observable<any>;
  public itemsRu: Observable<IGames[]>;
  public games: IGames[];
  constructor(
    public afs: AngularFirestore,
  ) {
    this.initFireGames();
  }
  

  initFireGames() {
    this.items = this.afs
      .collection(FireCollections.GAMES)
      .valueChanges()
      .pipe(take(1));
  }

  getItems(): Observable<any> {
    return this.items;
  }
}
