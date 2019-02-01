import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsrAddComponent } from './usr-add/usr-add.component';
import { UsrGetComponent } from './usr-get/usr-get.component';
import { UsrEditComponent } from './usr-edit/usr-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UsrAddComponent
  },
  {
    path: 'signin',
    component: UsrGetComponent
  },
  {
    path: 'user/edit',
    component: UsrEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
