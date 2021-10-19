import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'data' , loadChildren: () => import('./employee-data/employee-data.module').then(m => m.EmployeeDataModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
