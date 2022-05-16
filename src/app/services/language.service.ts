import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";
import { Store } from "@ngrx/store";
import { MainActions } from "../store/main/main.actions";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public currentLanguage = ''
  constructor(private translateService: TranslateService,private localize: LocalizeRouterService, private store$: Store) {
  
  }
  public setLanguage(): void{
    this.currentLanguage  =  <string> this.translateService.getBrowserLang();
    if (this.currentLanguage !== 'en' && this.currentLanguage !== 'ru'){
      this.currentLanguage = 'en'
    }
    this.localize.changeLanguage(this.currentLanguage)
    this.store$.dispatch(MainActions.setLanguage({
      language: this.currentLanguage
    }))
    alert('language init, imit change api to target language, because it`s impossible to do with FIRESTORE storage')
    console.log(this.currentLanguage)
  }
  
}
