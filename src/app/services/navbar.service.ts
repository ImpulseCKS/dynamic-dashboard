import { Injectable } from '@angular/core';
import { GridConfig } from '../models/grid-config';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private girdConfig: GridConfig = {
    rows: 0,
    columns: 0,
    cellsPerRow: 0
  };

  constructor() { }

  setGridConfig(rows: number, columns: number, cellsPerRow: number) {
    this.girdConfig = {
      rows: rows,
      columns: columns,
      cellsPerRow: cellsPerRow
    }
  }

  getGridConfig() {
    return this.girdConfig;
  }
}
