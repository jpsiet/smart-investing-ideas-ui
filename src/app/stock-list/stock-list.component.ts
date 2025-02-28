import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockServiceService } from '../services/stock-service.service';
import { ColDef } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { StockDetailDialogComponent } from '../stock-details/stock-detail.component';
import { Stock } from '../services/stock';

interface IRow {
  id: number;
  name: string;
  cusip: string;
  sector: string;
}

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent {
  stocks : IRow[] = [];
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: "id" },
    { field: "name" },
    { field: "sector" },
    { field: "cusip" },
  ];
  constructor( private stockSrvice:StockServiceService,private dialog: MatDialog) {

    this.getAllStocks();
  }

  getAllStocks(){
    this.stockSrvice.getStocks().subscribe((val:any) =>{
      this.stocks = val;
    })
  }

  onRowClicked(event: any): void {
    this.openStockDetails(event.data);
  }

  openStockDetails(stock: Stock): void {
    const dialogRef = this.dialog.open(StockDetailDialogComponent, {
      data: stock
    });
  }


  // Row Data: The data to be displayed.



}
