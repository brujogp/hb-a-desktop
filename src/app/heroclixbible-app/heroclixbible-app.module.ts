import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MainComponent} from './components/main/main.component';
import {ListComponent} from './reuse/list/list.component';
import {SlideSubsectionComponent} from './components/slide-subsections-list/slide-subsection.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShowHiddenButtonPaneComponent} from './reuse/show-hidden-button-pane/show-hidden-button-pane.component';
import {FormsModule} from '@angular/forms';
import {SlideIndecesSubsectionsComponent} from './components/slide-indeces-subsections/slide-indeces-subsections.component';
import {HelperToListChildrenComponent} from './reuse/helper-to-list-children/helper-to-list-children.component';
import {DescriptionNodeComponent} from './reuse/description-node/description-node.component';
import {SurrondWithTagsPipe} from '../pipes/surrond-with-tags.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {DialogShowingListComponent} from '../commons/dialogs/dialog-showing-list/dialog-showing-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    SlideSubsectionComponent,
    ShowHiddenButtonPaneComponent,
    SlideIndecesSubsectionsComponent,
    HelperToListChildrenComponent,
    DescriptionNodeComponent,
    SurrondWithTagsPipe,
    DialogShowingListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  exports: [
    SurrondWithTagsPipe,
    MatButtonModule
  ]
})
export class HeroclixbibleAppModule {
}
