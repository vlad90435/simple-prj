import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { MatCardModule } from "@angular/material/card";
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

@NgModule({
  declarations: [CategoryComponent],
	imports: [CommonModule, MatCardModule, LocalizeRouterModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}
