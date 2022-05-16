import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRowComponent } from './category-row.component';
import { CategoryModule } from '../category/category.module';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [CategoryRowComponent],
  imports: [CommonModule, CategoryModule, SwiperModule],
  exports: [CategoryRowComponent],
})
export class CategoryRowModule {}
