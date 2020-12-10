import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class MaterialModule { }
