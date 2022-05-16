import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireCategoryService } from './fire-category.service';
import { FireGamesService } from './fire-games.service';
import { combineLatest, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FireCollectionsService {
  constructor(
    public afs: AngularFirestore,
    public fireCategory: FireCategoryService,
    public fireGames: FireGamesService,
  ) {}
  getItems(): Observable<any> {
    let myFireStore = {
      categories: [],
      games: [],
    };
    const combine = combineLatest(
      this.fireCategory.getItems(),
      this.fireGames.getItems()
    ).pipe(
      map(([a, b]) => {
        myFireStore.categories = a;
        myFireStore.games = b;
        return myFireStore;
      })
    );
    return combine;
  }
}
