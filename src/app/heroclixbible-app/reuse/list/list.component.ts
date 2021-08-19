import {Component, Input, OnInit, Output} from '@angular/core';
import {HbModels} from '../../models/hb.model';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() elementsListable: any[];

  @Output() indexFromList = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickedSection(i: number, item: HTMLDivElement): void {
    this.indexFromList.emit(i);
  }
}
