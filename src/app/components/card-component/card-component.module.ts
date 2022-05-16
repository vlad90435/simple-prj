import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentComponent } from './card-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

@NgModule({
  declarations: [CardComponentComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule, LocalizeRouterModule],
  exports: [CardComponentComponent],
})
export class CardComponentModule {}
