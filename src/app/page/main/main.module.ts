import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SelectLanguageModule } from '../../components/select-language/select-language.module';
import { FooterModule } from '../../components/footer/footer.module';
import { CardRowModule } from '../../components/card-row/card-row.module';
import { SearchGameModule } from '../../components/search-game/search-game.module';
import { CategoryRowModule } from "../../components/category-row/category-row.module";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [MainComponent],
	imports: [
		MainRoutingModule,
		CommonModule,
		TranslateModule,
		MatFormFieldModule,
		MatSelectModule,
		MatIconModule,
		SelectLanguageModule,
		FooterModule,
		CardRowModule,
		SearchGameModule,
		CategoryRowModule,
		InfiniteScrollModule,
	],
})
export class MainModule {}
