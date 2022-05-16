import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { MainActions } from "../../store/main/main.actions";
import { FireGamesService } from "../../services/fire-games.service";

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit,OnDestroy {

  constructor(private store$: Store) { }
  public value = '';
  public subscribtion: Subscription;
  public searchControl = new FormControl()

  ngOnInit(): void {
    this.subscribtion = this.searchControl.valueChanges.pipe(
         distinctUntilChanged(),
         debounceTime(1000),
         tap((console.log)),
         tap((val) => {
             this.value = val;
           if (val.length > 2){
               alert('imitate get request to get games with searched name, because it`s impossible to do with' +
                   ' FIRESTORE')
               this.store$.dispatch(MainActions.findGamesByName({
                   name:val,
               }))
           }
           else{
               this.store$.dispatch(MainActions.searchClear())
           }
         })
     ).subscribe()
  }
    public searchByValue () {
        this.store$.dispatch(MainActions.findGamesByName({
            name:this.value,
        }))
    }
    
  ngOnDestroy () {
    this.subscribtion.unsubscribe()
  }
  
}
