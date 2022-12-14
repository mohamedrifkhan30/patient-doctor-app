import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<{ message: string; doctors: Doctor[] }> {
    return this.http.get<{ message: string; doctors: Doctor[] }>(
      'http://localhost:3000/api/doctors'
    );
  }

  postDoctor(doctor: Omit<Doctor, 'id'>): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      'http://localhost:3000/api/doctors',
      doctor
    );
  }
}