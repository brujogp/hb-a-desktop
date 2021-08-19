import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description-node',
  templateUrl: './description-node.component.html',
  styleUrls: ['./description-node.component.css'],
})
export class DescriptionNodeComponent implements OnInit {
  @Input() nodeSelected: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
