import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: false,
    emptyCellDropCallback: this.onDrop,
    disablePushOnDrag: true,
    disablePushOnResize: true,
    resizable: {
      enabled: true
    },
    minCols: 10,
    minRows: 10,
    maxCols: 10,
    maxRows: 20,
    fixedRowHeight: 300,
    fixedColWidth: 50
  };

  public layout: GridsterItem[] = [];

  dropId: string = '';

  constructor() { }

  addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0
    });
  }

  deleteItem(id: GridsterItem): void {
    const item = this.layout.find(d => d['id'] === id);
    this.layout.splice(this.layout.indexOf(item!), 1);
  }

  onDrop(): void {
     this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0
     })  
  }
}
