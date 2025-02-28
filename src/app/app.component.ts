import { Component } from '@angular/core';
import { WelcomeServiceService } from './services/welcome-service.service';
import { Observable } from 'rxjs';
import { StockServiceService } from './services/stock-service.service';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  welcome$ :Observable<any> ;
  stocks:Array<any> =[];


  constructor(private  service:WelcomeServiceService, private  dialog: MatDialog,
     private stockSrvice:StockServiceService, private router:Router){
   this.welcome$ = this.service.getWelcome() ;
  }



  getAllStocks(){
   this.router.navigate(['/stock-list']);
  }
 addStock(){
    this.router.navigate(['/add-stock']);
  }
}
