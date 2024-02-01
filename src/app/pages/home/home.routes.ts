import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import { DetailComponent } from './components/detail/detail.component';




export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: 'detail/:name',
        component: DetailComponent,

      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
