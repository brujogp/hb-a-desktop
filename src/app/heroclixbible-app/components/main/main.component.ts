import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChildSubsectionsList, HbModels, PaaItem, TaItem} from '../../models/hb.model';
import {HttpRequestService} from '../../../services/http-request.service';
import {animationShowHiddenPane} from '../../../animations/show-hidden-pane.animations';
import {TransmissionInformationService} from '../../../services/comunication/transmission-information.service';
import {TranslateService} from '@ngx-translate/core';
import {ThemePalette} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogShowingListComponent} from '../../../commons/dialogs/dialog-showing-list/dialog-showing-list.component';
import {VersionsModel} from '../../../models/versions.model';
import {ItemList, ListInfoModel} from '../../../commons/dialogs/dialog-showing-list/list-info-model/list-info.model';

@Component({
  selector: 'app-hb',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [animationShowHiddenPane]
})
export class MainComponent implements OnInit {
  sections: HbModels[];
  sectionSelected: HbModels;

  indexSubsection: number;

  genericList = [];

  showSubsection = false;

  // Item clicked from
  itemClicked: PaaItem;

  triggered = false;
  tagSectionSelected: string;

  public color: ThemePalette;

  public versionsList: VersionsModel[];


  private versionSelected: number;

  public isLoad = true;

  // tslint:disable-next-line:max-line-length
  private versionsInfoToDialog: ListInfoModel;

  constructor(private httpService: HttpRequestService,
              private transmissionInformationService: TransmissionInformationService,
              private translateService: TranslateService,
              public matDialog: MatDialog,
  ) {
    // @ts-ignore
    transmissionInformationService.bridgetForSubsectionPane.subscribe((value?: boolean) => {
      if (value != null) {
        this.showSubsection = value;
      } else {
        this.changeStateTriggerSubsection();
      }
    });
  }

  ngOnInit(): void {
    /*
    this.httpService.getSections(this.translateService.currentLang).subscribe(data => {
      this.isLoad = false;
      this.sections = data;
    });
     */
    if (localStorage.getItem('currentVersion') === null || '') {
      localStorage.setItem('currentVersion', '2020');
    }

    this.loadData();
  }


  sectionClicked($event: number): void {
    this.indexSubsection = $event;
    this.sectionSelected = this.sections[$event];

    this.changeStateTriggerSubsection();
    this.transmissionInformationService.senderSubsectionsList(this.sectionSelected);
  }

  changeStateTriggerSubsection(): void {
    this.showSubsection = !this.showSubsection;
  }


  showFilterVersionDialog(): void {
    this.versionsInfoToDialog = {
      instructions: 'Selecciona una versión',
      list: this.versionsList.map<ItemList>((value: any) => {
        return {id: value.id, name: value.year};
      })
    };


    const returnDialog = this.matDialog.open(DialogShowingListComponent, {
      width: '100%',
      data:
      this.versionsInfoToDialog
    });

    returnDialog.afterClosed().subscribe(v => {
      localStorage.setItem('currentVersion', JSON.stringify(this.versionsList[v].year));
      this.loadData();
    });
  }

  private loadData(): void {

    this.versionSelected = Number(localStorage.getItem('currentVersion'));

    this.httpService.getVersions().subscribe((response: VersionsModel[]) => {
      this.versionsList = response;

      const v = this.versionsList.filter(value => {
        if (value.year === this.versionSelected) {
          return value;
        }
      });

      console.log(v);

      this.httpService.getSectionsWithVersion(v[0], this.translateService.currentLang).subscribe(data => {
        this.isLoad = false;
        this.sections = data;
      });

    });

  }
}
