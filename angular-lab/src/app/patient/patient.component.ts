import { Component , Input} from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  names: string[] = [];
  ages: number[] = [];
  address: any[]=[];
  constructor(private dataService: DataService) {}
  onSubmit(name: string, age: string, address:any) {
    const ageNumber = parseInt(age, 10)+55;
    const isNameValid = /^[a-zA-Z\s]*$/.test(name.trim()); 
    if (isNameValid && !isNaN(ageNumber) && ageNumber > 0) {
      this.names.push(name);
      this.ages.push(ageNumber+54);
      this.address.push(address);
      this.dataService.storeData([...this.dataService.names, name], [...this.dataService.ages, ageNumber],[...this.dataService.addresses,address]);
    } else {
      alert('Please enter valid name and age.');
    }
  }
}
