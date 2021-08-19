import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ProjectSectionComponent} from './sections/project-section/project-section.component';
import {MainSectionComponent} from './sections/main-section/main-section.component';
import {BottomToolbarComponent} from './bottom-toolbar/bottom-toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavSectionsComponent} from './nav-sections/nav-sections.component';
import {ListSectionsComponent} from './nav-sections/list-sections/list-sections.component';
import {UsSectionComponent} from './sections/us-section/us-section.component';
import {HeroclixbibleAppModule} from './heroclixbible-app/heroclixbible-app.module';
import {ReplacePipe} from './pipes/replace.pipe';
import {MainComponent} from './heroclixbible-app/components/main/main.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SettingsComponent} from './sections/settings/settings.component';

const routers: Routes = [
  {path: '', component: MainSectionComponent, data: {animationsId: 'root'}},
  {path: 'about-heroclixbible', component: ProjectSectionComponent, data: {animationsId: 'project'}},
  {path: 'about-heroclixbible-team', component: UsSectionComponent},
  {path: 'app', component: MainComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: '', data: {animationsId: 'any'}}
];

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectSectionComponent,
    MainSectionComponent,
    UsSectionComponent,
    BottomToolbarComponent,
    NavSectionsComponent,
    ListSectionsComponent,
    ReplacePipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HeroclixbibleAppModule,
    RouterModule.forRoot(routers),
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
