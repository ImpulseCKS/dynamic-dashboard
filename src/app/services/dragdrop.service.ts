import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragdropService {
  private itemDroppedSource = new Subject<string>();
  itemDropped$ = this.itemDroppedSource.asObservable();

  constructor() { }

  dropItem(item: string) {
    this.itemDroppedSource.next(item);
  }
}
