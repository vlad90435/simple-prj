import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { MainActions } from "../../store/main/main.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit {
  constructor(public localize: LocalizeRouterService, private store$: Store) {}

  ngOnInit(): void {}
  public selectedLang: string;

  public changeLang(selectedLang: string) {
    this.localize.changeLanguage(selectedLang, { replaceUrl: true });
    this.store$.dispatch(MainActions.setLanguage({
      language: selectedLang
    }))
    this.store$.dispatch(MainActions.fireGetAllCollections());
  }
}
