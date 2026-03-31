import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(ModalModule.forRoot()), 
    importProvidersFrom(CarouselModule.forRoot()),
    importProvidersFrom(CollapseModule.forRoot()),
    importProvidersFrom(FormsModule)
  ]
};
