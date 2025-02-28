import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { AddStockComponent } from './add-stock/add-stock.component';

const routes: Routes = [ {
  path: 'stock-list',
  component:StockListComponent
},
{
  path: 'details-about-stock',
  component:StockListComponent
}
,
{
  path: 'add-stock',
  component:AddStockComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
