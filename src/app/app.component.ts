import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { FireCollectionsService } from './services/fire-collections.service';
import { MainActions } from './store/main/main.actions';
import { Store } from '@ngrx/store';
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'casino';

  constructor(
    private localize: LocalizeRouterService,
    private fireCollections: FireCollectionsService,
    private store$: Store,
    private translateService: TranslateService,
    private languageService: LanguageService,
  ) {}

  ngOnInit() {
    this.languageService.setLanguage();
    this.store$.dispatch(MainActions.fireGetAllCollections());
  }
}
