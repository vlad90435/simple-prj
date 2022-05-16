import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoaderComponent } from "./app-loader.component";

const routes: Routes = [
  {
    path: '',
    component: AppLoaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLoaderRoutingModule { }
