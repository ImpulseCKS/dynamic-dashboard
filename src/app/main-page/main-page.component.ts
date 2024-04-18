import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { GridCell } from '../models/grid-cell';
import { DragdropService } from '../services/dragdrop.service';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  gridCells: any[] = [];

  constructor(private dragDropService: DragdropService) {

  }

  ngOnInit(): void {
    // Initialize gridCells here
    this.gridCells = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const item = event.dataTransfer?.getData('text/plain');
    this.dragDropService.dropItem(item ? item : '');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
