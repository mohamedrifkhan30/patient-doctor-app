import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';

const routes: Routes = [
  {
    path: '',
    component: ListDoctorsComponent,
  },
  {
    path: 'add',
    component: AddDoctorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
