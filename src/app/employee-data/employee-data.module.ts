import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDataComponent } from './employee-data.component';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeDataComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: EmployeeDataComponent
    }]),
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatExpansionModule,
    ReactiveFormsModule
  ]
})
export class EmployeeDataModule { }
