import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DragdropService } from 'src/app/services/dragdrop.service'
import { GridConfig } from '../models/grid-config';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  gridForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.gridForm = this.fb.group({
      rows: ['', Validators.required],
      columns: ['', Validators.required],
      cellsPerRow: ['', Validators.required]
    });
  }

  onDragStart(event: DragEvent, item: string) {
    event.dataTransfer?.setData('text/plain', item);
  }

  onSubmit() {
    let gridConfig: GridConfig = this.gridForm.value;
    this.validateGridData(this.gridForm.value);
  }

  validateGridData(gridConfig: GridConfig): boolean {
    if (gridConfig.rows > 2)
      return false;
    else if (gridConfig.columns > 3)
      return false;
    else if (gridConfig.cellsPerRow > 3)
      return false;
    else
      return true;
  }
}
