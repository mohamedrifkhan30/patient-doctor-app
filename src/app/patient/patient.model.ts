import { Doctor } from "../doctor/doctor.model";

export interface Patient{
    id:number;
    name:string;
    doctorId:number;
    doctor:Doctor;
}