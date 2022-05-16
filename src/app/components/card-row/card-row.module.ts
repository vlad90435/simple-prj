import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRowComponent } from './card-row.component';
import { CardComponentModule } from '../card-component/card-component.module';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [CardRowComponent],
	imports: [CommonModule, CardComponentModule, TranslateModule],
  exports: [CardRowComponent],
})
export class CardRowModule {}
