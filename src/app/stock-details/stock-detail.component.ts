import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Stock } from '../services/stock';


@Component({
  selector: 'app-stock-detail-dialog',
  templateUrl: './stock-detail-dialog.component.html',
  styleUrls: ['./stock-detail-dialog.component.scss']
})
export class StockDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public stock: Stock,
  private dialogRef: MatDialogRef<StockDetailDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();  // Close the dialog manually
  }
}
