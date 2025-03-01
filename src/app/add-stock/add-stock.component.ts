import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockServiceService } from '../services/stock-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent {
 form!: FormGroup;

  sectors: string[] = ['Technology', 'Finance', 'Healthcare', 'Energy']; // Example list of sectors

  constructor(private fb: FormBuilder, private stockSrvice:StockServiceService,
     private router:Router,
     private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      cusip: ['', [Validators.required, Validators.pattern('^[0-9]{3-9}$')]], // Example pattern for Cusip (9 digits)
      marketCap: ['', [Validators.required, Validators.pattern('^[0-9]{3-9}$')]], // Example pattern for Cusip (3 digits)
      price: ['', [Validators.required, Validators.pattern('^[0-9]{3-9}$')]], // Example pattern for Cusip (3 digits)
      description: ['', Validators.required],
      sector: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
     this.stockSrvice.addStock(this.form.value).subscribe( val =>{
      this.snackBar.open('sucessfully  added stock', 'Close', {
        duration: 3000, // Duration in milliseconds
      });

      this.router.navigate(['/stock-list']);
     });
    }
  }
}
