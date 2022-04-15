import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [


  {
    path: '404',

    component: NotFoundComponent,
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then((m) => m.CatalogModule)
  },

  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
