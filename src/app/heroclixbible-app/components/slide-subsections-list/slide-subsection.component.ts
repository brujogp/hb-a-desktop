import {Component, Input, OnInit} from '@angular/core';
import {animationShowHiddenPaneSubsection} from '../../../animations/show-hidden-pane.animations';
import {ChildSubsectionsList, HbModels} from '../../models/hb.model';
import {TransmissionInformationService} from '../../../services/comunication/transmission-information.service';

@Component({
  selector: 'app-slide-subsections',
  templateUrl: './slide-subsection.component.html',
  styleUrls: ['./slide-subsection.component.css'],
  animations: [animationShowHiddenPaneSubsection]
})
export class SlideSubsectionComponent implements OnInit {
  public childrenOfSections: ChildSubsectionsList[];
  nameSection: string;
  indexFromSubsectionsList = -1;
  showIndicesSubsection = false;
  subsectionSelected: any;

  constructor(private transmitterData: TransmissionInformationService) {
  }


  ngOnInit(): void {
    this.transmitterData.holdInfoHeroclixModel.subscribe((value?: HbModels) => {
      if (value) {
        this.nameSection = value.name;
        this.childrenOfSections = value.childSubsectionsList;
      }
    });

    this.transmitterData.triggerToIndicesSubsectionAnimation.subscribe((value?: boolean) => {
      if (value != null) {
        this.showIndicesSubsection = value;
      } else {
        this.changeStateAnimation();
      }
    });
  }

  assingIndexFromSubsectionList(indexSubsectioList: number): void {
    this.indexFromSubsectionsList = indexSubsectioList;
    this.transmitterData.senderIndicesList(this.childrenOfSections[this.indexFromSubsectionsList]);
    this.changeStateAnimation();
  }

  changeStateAnimation(): void {
    this.showIndicesSubsection = !this.showIndicesSubsection;
  }
}
