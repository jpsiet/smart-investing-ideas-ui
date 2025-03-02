import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-stock-detail-renderer',
  template: `
    <button mat-icon-button (click)="showDetails()">
      <mat-icon>info</mat-icon> <!-- You can use any icon here -->
    </button>
  `
})
export class StockDetailRendererComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  showDetails() {
    this.params.context.componentParent.onRowClicked(this.params);
  }

  refresh(): boolean {
    return false;
  }
}
