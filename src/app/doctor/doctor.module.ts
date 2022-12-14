import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { SharedModule } from '../shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';



@NgModule({
  declarations: [
    AddDoctorComponent,
    ListDoctorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
