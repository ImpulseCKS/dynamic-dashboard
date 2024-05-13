import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { GridCell } from '../models/grid-cell';
import { DragdropService } from '../services/dragdrop.service';
import * as MobileDetect from 'mobile-detect';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  gridCells: any[] = [];
  mobileDetector = new MobileDetect(navigator.userAgent);

  constructor(private dragDropService: DragdropService) {

  }

  ngOnInit(): void {
    if (!this.mobileDetector.mobile())
      this.gridCells = [{}, {}, {}, {}, {}, {}];
    else
      this.gridCells = [{}, {}];
  }

  onDrop(event: DragEvent, cellIndex: number) {
    event.preventDefault();
    const item = event.dataTransfer?.getData('text/plain');
    this.dragDropService.dropItem(item ? item : '');
    this.gridCells[cellIndex].itemName = item;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
