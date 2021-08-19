import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {HttpRequestService} from '../../../services/http-request.service';
import {VersionsModel} from '../../../models/versions.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListInfoModel} from './list-info-model/list-info.model';

@Component({
  selector: 'app-test',
  templateUrl: './dialog-showing-list.component.html',
  styleUrls: ['./dialog-showing-list.component.css']
})
export class DialogShowingListComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogShowingListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ListInfoModel
  ) {
  }

  ngOnInit(): void {
  }

  selectVersion(i: number): void {
    this.dialogRef.close(i);
  }
}
