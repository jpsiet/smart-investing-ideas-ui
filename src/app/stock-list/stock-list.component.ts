import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockServiceService } from '../services/stock-service.service';
import { ColDef } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { StockDetailDialogComponent } from '../stock-details/stock-detail.component';
import { Stock } from '../services/stock';
import { StockDetailRendererComponent } from '../gridcustomicon/stock-details-render.component';

interface IRow {
  id: number;
  name: string;
  cusip: string;
  sector: string;
  details:any
}

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent {
  stocks : IRow[] = [];
  frameworkComponents = {
    'detailCellRenderer': StockDetailRendererComponent  // Register custom cell renderer
  };
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: "id" ,width:100},
    { field: "name" },
    { field: "sector" },
    { field: "cusip" },
    {headerName: 'Details',
      field: 'details',
      cellRenderer: 'detailCellRenderer', // Use custom cell renderer
      maxWidth: 100 }
  ];
  context: any;
  constructor( private stockSrvice:StockServiceService,private dialog: MatDialog) {
    this.context = {
      componentParent: this
  }

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
