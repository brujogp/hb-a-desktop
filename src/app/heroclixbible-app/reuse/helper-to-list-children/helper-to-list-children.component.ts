import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaaItem} from '../../models/hb.model';

@Component({
  selector: 'app-helper-to-list-children',
  templateUrl: './helper-to-list-children.component.html',
  styleUrls: ['./helper-to-list-children.component.css']
})
export class HelperToListChildrenComponent implements OnInit {
  @Input() listItems: any[];
  @Output() eventNodeSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  nodeSelected(i: number): void {
    this.eventNodeSelected.emit(this.listItems[i]);
  }
}
