import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Stock } from '../services/stock';


@Component({
  selector: 'app-stock-detail-dialog',
  templateUrl: './stock-detail-dialog.component.html',
  styleUrls: []
})
export class StockDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public stock: Stock) {}
}
