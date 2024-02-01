import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home', loadChildren: () => import('../app/pages/home/home.routes').then(mod => mod.routes )
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];
