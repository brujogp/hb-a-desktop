import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TransmissionInformationService} from '../../../services/comunication/transmission-information.service';
import {ChildSubsectionsList, PaaItem, TaItem} from '../../models/hb.model';
import {animationShowHiddenPaneDescriptionNode} from '../../../animations/show-hidden-pane.animations';

@Component({
  selector: 'app-slide-indeces-subsections',
  templateUrl: './slide-indeces-subsections.component.html',
  styleUrls: ['./slide-indeces-subsections.component.css'],
  animations: [animationShowHiddenPaneDescriptionNode],
  encapsulation: ViewEncapsulation.None
})
export class SlideIndecesSubsectionsComponent implements OnInit {
  subsectionSelected: ChildSubsectionsList;
  isPaaList = false;
  isTaList = false;
  typeSubsection: any[];
  paaNodeSelected: PaaItem;
  showDescriptionPane = false;

  constructor(private dataFromSubsectionPane: TransmissionInformationService) {
  }

  ngOnInit(): void {
    this.dataFromSubsectionPane.holdInfoHeroclixModel2.subscribe((value: ChildSubsectionsList) => {
      this.subsectionSelected = value as ChildSubsectionsList;

      if (this.subsectionSelected.taList != null && this.subsectionSelected.taList.length > 0) {
        this.typeSubsection = null;
        this.typeSubsection = this.subsectionSelected.taList as TaItem[];
        this.isTaList = true;
      } else if (this.subsectionSelected.paaList != null && this.subsectionSelected.paaList.length > 0) {
        this.typeSubsection = null;
        this.typeSubsection = this.subsectionSelected.paaList as PaaItem[];
        this.isPaaList = true;
      }
    });

    this.dataFromSubsectionPane.stateDescriptionPaneObserver.subscribe((value?: boolean) => {
      if (value != null) {
        this.showDescriptionPane = value;
      } else {
        this.changeStateDescriptionPane();
      }
    });
  }

  nodeSelected($event: PaaItem): void {
    this.paaNodeSelected = $event;
    this.changeStateDescriptionPane();
  }

  changeStateDescriptionPane(): void {
    this.showDescriptionPane = !this.showDescriptionPane;
  }
}
