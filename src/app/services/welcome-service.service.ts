import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService {

  baseUrl = 'localhost:8080/'
  constructor( private http:HttpClient) { }



  getWelcome() {
    return this.http.get('http://localhost:8080/' + 'greeting')
  }


}
