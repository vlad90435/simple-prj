import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IGames } from "../../models/games.interface";
import { Store } from "@ngrx/store";
import { MainSelectors } from "../../store/main/main.selectors";

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss']
})
export class CardRowComponent implements OnInit {

  public games$:Observable<IGames[]>
  public isSearch$: Observable<boolean>
  public searchGames$: Observable<IGames[]>
  public popular$: Observable<number>;
  constructor(private store$: Store ) { }

  ngOnInit(): void {
    this.isSearch$ = this.store$.select(MainSelectors.selectIsSearch);
    this.games$ = this.store$.select(MainSelectors.selectGames)
    this.searchGames$ = this.store$.select(MainSelectors.selectSearchedGames)
    this.popular$ = this.store$.select(MainSelectors.selectPopular)
  }

}
