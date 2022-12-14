import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent implements OnInit {
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {}

  saveDoctor(form: NgForm) {
    const doctor: Omit<Doctor, 'id'> = {
      name: form.value.name
    };
    this.doctorService.postDoctor(doctor).subscribe(res=>{
      form.resetForm();
    });
  }
}
