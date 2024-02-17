import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }
  display()
  {
    return alert("Hi i am nandan");
  }
}
