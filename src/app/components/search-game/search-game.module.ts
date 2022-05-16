import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGameComponent } from './search-game.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchGameComponent],
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatIconModule,
		ReactiveFormsModule,
	],
  exports: [SearchGameComponent, CommonModule],
})
export class SearchGameModule {}
