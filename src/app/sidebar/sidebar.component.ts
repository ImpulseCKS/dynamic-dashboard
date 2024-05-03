import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DragdropService } from 'src/app/services/dragdrop.service'

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
    console.warn(this.gridForm.value);
  }
}
