import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<{ message: string; doctors: Doctor[] }> {
    return this.http.get<{ message: string; doctors: Doctor[] }>(
      `${environment.SERVER}/api/doctors`
    );
  }

  postDoctor(doctor: Omit<Doctor, 'id'>): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${environment.SERVER}/api/doctors`,
      doctor
    );
  }
}
