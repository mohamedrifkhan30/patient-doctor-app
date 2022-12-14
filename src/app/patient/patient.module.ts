import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { SharedModule } from '../shared/shared.module';
import { PatientRoutingModule } from './patient-routing.module';



@NgModule({
  declarations: [
    AddPatientComponent,
    ListPatientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientRoutingModule
  ],
  exports:[ListPatientsComponent]
})
export class PatientModule { }
