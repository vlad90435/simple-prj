import { Component, Input, OnInit } from '@angular/core';
import { ICategories } from "../../models/categories.interface";
import { Store } from "@ngrx/store";
import { MainActions } from "../../store/main/main.actions";
import { Observable } from "rxjs";
import { MainSelectors } from "../../store/main/main.selectors";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() public data: ICategories
  public selected$ : Observable<string>
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.selected$ = this.store$.select(MainSelectors.selectMyCategory)
  }

}
