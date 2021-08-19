import {Component, OnInit} from '@angular/core';
import {animate, query, state, style, transition, trigger} from '@angular/animations';
import {TransmissionInformationService} from '../services/comunication/transmission-information.service';

@Component({
  selector: 'app-nav-sections',
  templateUrl: './nav-sections.component.html',
  styleUrls: ['./nav-sections.component.css'],
  animations: [
    trigger('showMenuTrigger', [
      state('not-show', style({
        position: 'fixed',
        backgroundColor: 'black',
        zIndex: '2',
        height: '36rem',
        width: '100%',
        top: '-250%',
      })),
      state('show', style({
        position: 'fixed',
        zIndex: '2',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        display: 'block',
        top: '0'
      })),
      transition('not-show <=> show', [
        animate('.2s')
      ])
    ])]
})

export class NavSectionsComponent implements OnInit {

  showMenu = false;

  constructor(private transmitterEvent: TransmissionInformationService) {
  }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
    this.transmitterEvent.changeStateForSubsectionPane(false);
    this.transmitterEvent.changeStateForDescriptionPane(false);
    this.transmitterEvent.changeStateForIndicesPane(false);
  }
}
