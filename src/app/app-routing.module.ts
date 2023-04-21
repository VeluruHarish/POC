import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'body', component: HeaderComponent,
  },
  {
    path: 'body/:location', component: BodyComponent,
  },
  {
    path: 'header/:location', component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
