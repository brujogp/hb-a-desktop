import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.css'],
  animations: [
    trigger('clickedTrigger', [
      state('clickedButtonToClose', style({
        background: 'white'
      })),

      transition('clickedButtonToClose <=> clickedButtonToOpen',
        [animate('100ms ease-out')]),

      state('clickedButtonToOpen', style({
        background: 'grey'
      })),
      transition('clickedButtonToClose <=> clickedButtonToOpen', [animate('100ms ease-in')]),
      state('clickedButtonToOpen', style({
        background: 'white'
      }))
    ])
  ]
})

export class BottomToolbarComponent implements OnInit {
  @ViewChild('searchbar')
  private searchBar;
  public isOpen = 'clickedButtonToClose';

  constructor() {
  }

  cld(): void {
    this.isOpen = this.isOpen === 'clickedButtonToClose' ? 'clickedButtonToOpen' : 'clickedButtonToClose';
  }

  ngOnInit(): void {
  }

}
