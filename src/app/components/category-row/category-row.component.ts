import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ICategories } from "../../models/categories.interface";
import { MainSelectors } from "../../store/main/main.selectors";
import { MainActions } from "../../store/main/main.actions";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-category-row',
  templateUrl: './category-row.component.html',
  styleUrls: ['./category-row.component.scss']
})
export class CategoryRowComponent implements OnInit {

  public categories$: Observable<ICategories[]>
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.categories$ = this.store$.select(MainSelectors.selectCategories)
  }
	
	public filterByCategory(val: string){
		this.store$.dispatch(MainActions.filterByCategory({category: val}))
	}
}
