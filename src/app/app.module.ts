import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridAngular } from "ag-grid-angular";
import { StockListComponent } from './stock-list/stock-list.component';
import { MaterialModule } from './material.module';
import { StockDetailDialogComponent } from './stock-details/stock-detail.component';
import { StockDetailRendererComponent } from './gridcustomicon/stock-details-render.component';
import  {BrowserAnimationsModule}  from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    AddStockComponent,
    StockDetailDialogComponent,
    StockListComponent,
    StockDetailRendererComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    AgGridAngular,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
