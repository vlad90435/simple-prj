import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLanguageComponent } from './select-language.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SelectLanguageComponent],
  exports: [SelectLanguageComponent],
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatSelectModule],
})
export class SelectLanguageModule {}
