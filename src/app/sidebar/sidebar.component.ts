import { Component } from '@angular/core';
import { DragdropService } from 'src/app/services/dragdrop.service'

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private dragDropService: DragdropService) {
  }

  onDragStart(event: DragEvent, item: string) {
    event.dataTransfer?.setData('text/plain', item);
  }
}
