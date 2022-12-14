import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css'],
})
export class ListPatientsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'doctorId', 'doctor','action'];
  dataSource$: Observable<Patient[]> | undefined;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.dataSource$ = this.patientService
      .getPatients()
      .pipe(map((res) => res.patients));
  }

  editRow(id:number){
    this.router.navigate([`${id}`], { relativeTo: this.route });  }
}