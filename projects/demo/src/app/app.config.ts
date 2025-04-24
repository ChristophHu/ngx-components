import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TemplateComponent } from './template/template.component';
import { provideGithubPagesDemo } from '@christophhu/ngx-github-pages-demo';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideGithubPagesDemo({ username: 'christophhu', repository: 'ngx-debug-mode', version: '19.2.1', token: null, template: TemplateComponent }),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
