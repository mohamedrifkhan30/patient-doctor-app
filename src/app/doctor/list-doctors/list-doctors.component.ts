import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css'],
})
export class ListDoctorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','action'];
  dataSource$: Observable<Doctor[]> | undefined;
  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.dataSource$ = this.doctorService
      .getDoctors()
      .pipe(map((res) => res.doctors));
  }
}
