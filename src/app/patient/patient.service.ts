import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patients: Patient[] = [];
  private patientsUpdated = new Subject<Patient[]>();
  constructor(private http: HttpClient) {}

  addPaitent(patient: Omit<Patient, 'doctor' | 'id'>) {
    return this.http
      .post(`${environment.SERVER}/api/patients`, patient)
      .subscribe((data:any) => {
        console.log(data);
      });
  }

  getPatients(): Observable<{ message: string; patients: Patient[] }> {
    return this.http.get<{ message: string; patients: Patient[] }>(
      `${environment.SERVER}/api/patients`
    );
  }

  getPatient(id: number) {
    return this.http.get<{ patient: Patient }>(
      `${environment.SERVER}/api/patients/${id}`
    );
  }
}
