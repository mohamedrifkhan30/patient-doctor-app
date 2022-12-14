import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';

@Injectable({ providedIn: 'root' })
export class PatientResolver implements Resolve<Patient> {
  constructor(private service: PatientService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Patient>|Promise<Patient>|Patient {
    return this.service.getPatient(+route.paramMap.get('id')!).pipe(map(res=>res.patient));
  }
}


const routes: Routes = [
  {
    path: '',
    component: ListPatientsComponent,
  },
  {
    path: 'add',
    component: AddPatientComponent,
  },
  {
    path: ':id',
    component: AddPatientComponent,
    resolve: {
      patient: PatientResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
