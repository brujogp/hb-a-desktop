import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogShowingListComponent} from '../../commons/dialogs/dialog-showing-list/dialog-showing-list.component';
import {ItemList, ListInfoModel} from '../../commons/dialogs/dialog-showing-list/list-info-model/list-info.model';
import {LangModel} from '../../models/lang.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private language: string;
  private theme: string;
  private currentLang: string;
  private languageTitlePrompt: string;
  private listLanguages: LangModel;

  private langInfo: ListInfoModel;
  private auxListLang: any[];

  constructor(private translateService: TranslateService,
              public matDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('currentLang') || navigator.language;
    if (this.currentLang.includes('-')) {
      this.currentLang = this.currentLang.split('-')[0];
    }

    this.translateService.stream('LANGUAGE_INSTRUCTIONS_PROMPT').subscribe(value => {
      this.languageTitlePrompt = value;
    });

    this.translateService.stream(['es', 'en']).subscribe((value: any) => {
      this.listLanguages = value;
    });

  }

  clickSetting(optionSetting: HTMLDivElement): void {
    this.langInfo = {
      instructions: this.languageTitlePrompt,
      list: this.getLangListArrays().map<ItemList>((value: any) => {
        return {id: Object.keys(value)[0], name: Object.values<string>(value)[0]};
      })
    };


    switch (optionSetting.id) {
      case '1': {
        const returnDialog = this.matDialog.open(DialogShowingListComponent, {
          width: '100%',
          data: this.langInfo
        });

        returnDialog.afterClosed().subscribe(v => {
          if (Object.keys(this.auxListLang[v])[0].toString() !== null) {
            this.language = this.auxListLang[v];
            localStorage.setItem('currentLang', Object.keys(this.auxListLang[v])[0].toString());
            this.translateService.use(localStorage.getItem('currentLang'));
          }
        });
        break;
      }
      /*
      case '2': {
        this.buildSwal('Select your theme', {csa: 'Cian', sfa: 'Blue'}, this.translateService.currentLang).then(
          value => {
            this.theme = value;
            console.log(this.theme);
          }
        );
        break;

      }
       */
    }
  }

  private getLangListArrays(): any[] {
    this.auxListLang = [];

    let count = 0;

    while (count < Object.keys(this.listLanguages).length) {
      const l = {};
      const k = Object.keys(this.listLanguages)[count];
      l[k] = Object.values(this.listLanguages)[count];
      this.auxListLang.push(l);

      count++;
    }

    return this.auxListLang;
  }
}
