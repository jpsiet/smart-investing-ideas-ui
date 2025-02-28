import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockServiceService } from '../services/stock-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent {
 form!: FormGroup;

  sectors: string[] = ['Technology', 'Finance', 'Healthcare', 'Energy']; // Example list of sectors

  constructor(private fb: FormBuilder, private stockSrvice:StockServiceService,  private router:Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      cusip: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]], // Example pattern for Cusip (9 digits)
      description: ['', Validators.required],
      sector: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
     this.stockSrvice.addStock(this.form.value).subscribe( val =>{
      this.router.navigate(['/stock-list']);
     });
    }
  }
}
