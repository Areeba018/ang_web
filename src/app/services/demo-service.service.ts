import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Makes it available throughout the app
})
export class DemoServiceService {
  private username: string = 'Guest';


  constructor() { }
   // Method to set the username
   setUsername(name: string) {
    this.username = name;
  }

  // Method to get the username
  getUsername(): string {
    return this.username;
  }
}



// define functions that you will call in your component. 
// Let's say you want the service to handle form submissions or interact with an API for submitting data.
