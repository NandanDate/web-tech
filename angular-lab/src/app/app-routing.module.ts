import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PrintpatientComponent } from './printpatient/printpatient.component';

const routes: Routes = [
  {path:"Doctor",component:DoctorComponent},
  {path:"Patient",component:PatientComponent},
  {path:"printpatient",component:PrintpatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
