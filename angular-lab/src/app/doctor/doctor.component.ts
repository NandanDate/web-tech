import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  d:any;
  constructor(private dis:DisplayService)

  {
    this.d=dis.display();

  }

}
