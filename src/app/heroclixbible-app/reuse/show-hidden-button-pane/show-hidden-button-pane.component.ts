import {Component, Input, OnInit} from '@angular/core';
import {TransmissionInformationService} from '../../../services/comunication/transmission-information.service';

@Component({
  selector: 'app-show-hidden-button-pane',
  templateUrl: './show-hidden-button-pane.component.html',
  styleUrls: ['./show-hidden-button-pane.component.css']
})
export class ShowHiddenButtonPaneComponent implements OnInit {

  @Input() namePane: string;

  constructor(private showHiddenPaneService: TransmissionInformationService) {
  }

  ngOnInit(): void {
  }

  showHiddenSubsectionPane(nameFromPane: string): void {
    switch (nameFromPane) {
      case 'subsections-pane': {
        this.showHiddenPaneService.changeStateForIndicesPane(false);
        this.showHiddenPaneService.changeStateForSubsectionPane(false);
        this.showHiddenPaneService.changeStateForDescriptionPane(false);
        break;
      }
      case 'indices-subsection-pane': {
        this.showHiddenPaneService.changeStateForIndicesPane(false);
        this.showHiddenPaneService.changeStateForDescriptionPane(false);
        break;
      }
      case 'description-node': {
        this.showHiddenPaneService.changeStateForDescriptionPane(false);
        break;
      }
    }
  }
}
