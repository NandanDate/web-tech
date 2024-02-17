import { Component,Input, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-printpatient',
  templateUrl: './printpatient.component.html',
  styleUrl: './printpatient.component.css'
})
export class PrintpatientComponent implements OnInit {
  names: string[] = [];
  ages: number[] = [];
  addresses:any[]=[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getData();
    this.names = data.names;
    this.ages = data.ages;
    this.addresses=data.addresses;
  }
}