import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPatientsComponent } from './patient/list-patients/list-patients.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ListPatientsComponent,
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./doctor/doctor.module').then((mod) => mod.DoctorModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patient/patient.module').then((mod) => mod.PatientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
