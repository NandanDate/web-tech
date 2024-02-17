import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  names: string[] = [];
  ages: number[] = [];
  addresses : any[]=[];

  storeData(names: string[], ages: number[],addresses:any[]) {
    this.names = names;
    this.ages = ages;
    this.addresses=addresses;
  }

  getData() {
    return { names: this.names, ages: this.ages,addresses: this.addresses };
  }
}
