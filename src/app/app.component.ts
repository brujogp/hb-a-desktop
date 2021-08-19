import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {routerTransitionAnimation} from './animation-router';
import {filter} from 'rxjs/operators';
import {Meta} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransitionAnimation]
})
export class AppComponent {
  title = 'HeroclixBibleAngular';

  constructor(private router: Router, private meta: Meta, private translateService: TranslateService) {
    // Comunicación con Google Analytics
    const navEndEvent$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    navEndEvent$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-70WVZPM5R5', {
        'page-path': event.urlAfterRedirects
      });

    });

    this.meta.addTags([
      {
        name: 'description',
        content: 'Heroclix Bible es una aplicación multiplataforma que reune y crea diferentes recursos e informacion sobre el Universo Heroclix en diferentes idiomas.'
      },
      {name: 'author', content: 'Velendy'},
      {name: 'keywords', content: 'Heroclix, Heroclix Bible, Heroclix Rules, Heroclix Forum, Heroclix Project, Velendy'}
    ]);
    this.meta.updateTag({
      name: 'description',
      content: 'Heroclix Bible es una aplicación multiplataforma que reune y crea diferentes recursos e informacion sobre el Universo Heroclix en diferentes idiomas.'
    });

    let lang = localStorage.getItem('currentLang') || navigator.language;
    if (lang.includes('-')) {
      lang = lang.split('-')[0];
    }

    translateService.setDefaultLang(lang);
    translateService.use(lang);
  }

  prepareRouting(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animationsId;
  }
}
