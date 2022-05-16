import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Store } from '@ngrx/store';
import { MainActions } from '../../store/main/main.actions';
import { Subscription} from 'rxjs';
import { MainSelectors } from '../../store/main/main.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(public localize: LocalizeRouterService, private store$: Store) {}
  public gamesLength: number;
  public selectedCategory: string;
  public subscribtionCategory: Subscription;
  public subscribtionGames: Subscription;

  ngOnInit(): void {
    this.subscribtionGames = this.store$
      .select(MainSelectors.selectMyCategory)
      .pipe()
      .subscribe((data) => (this.selectedCategory = data));
    this.subscribtionCategory = this.store$
      .select(MainSelectors.selectMyGamesLength)

      .subscribe((data) => (this.gamesLength = data));
  }

  public changeLang(selectedLang: string) {
    console.log('change lang replaceUrl');
    this.localize.changeLanguage(selectedLang, { replaceUrl: true });
  }

  public onScroll() {
    if (this.gamesLength > 100 || this.selectedCategory !== '') {
      return;
    } else {
      alert(
        'imitate get request to get another 20 elements, because it`s impossible to do with FIRESTORE'
      );
      this.store$.dispatch(MainActions.getNextGames());
    }
  }
  ngOnDestroy() {
    this.subscribtionCategory.unsubscribe()
    this.subscribtionGames.unsubscribe()
  }
}
