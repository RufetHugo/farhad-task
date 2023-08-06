import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./pages/main/components/not-found/not-found.component";


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/main/modules/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
