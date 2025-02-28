import { Component } from '@angular/core';
import { WelcomeServiceService } from './services/welcome-service.service';
import { Observable } from 'rxjs';
import { StockServiceService } from './services/stock-service.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
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

  getStockById(){
    const random = 1+ Math.floor(Math.random()*5);
    this.stockSrvice.getStockById(random).subscribe((val:any) =>{
      this.stocks = val?[val]:[];
    })
  }

  getAllStocks(){
   this.router.navigate(['/stock-list']);
  }


  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

  addStock(){
    this.router.navigate(['/add-stock']);
  }
}
