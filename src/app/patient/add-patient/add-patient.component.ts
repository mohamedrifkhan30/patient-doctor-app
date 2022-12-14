import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from 'src/app/doctor/doctor.model';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Patient } from '../patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  myControl = new FormControl('');
  options$: Observable<Doctor[]> | undefined;
  @ViewChild('patientForm') patientForm: NgForm|undefined;
  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ patient }) => {
      // this.patientForm!.controls["name"].setValue("sa")
      
    })
    this.options$ = this.doctorService
      .getDoctors()
      .pipe(map((res) => res.doctors));
  }

  savePatient(form: NgForm) {
    const patient: Omit<Patient, 'doctor' | 'id'> = {
      name: form.value.name,
      doctorId: form.value.doctor.id,
    };
    this.patientService.addPaitent(patient);
    form.resetForm();
  }

  displayFn(doctor: Doctor): string {
    return doctor && doctor.name ? doctor.name : '';
  }
}
