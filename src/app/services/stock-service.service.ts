import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  baseUrl = 'http://localhost:8080/stocks'
  constructor( private http:HttpClient) { }



  getStocks() {
    return this.http.get(this.baseUrl)
  }

  addStock(stock:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.baseUrl,{...stock})
  }

  getStockById(id:number){
    return this.http.get(this.baseUrl + '/' + id)
  }


}
