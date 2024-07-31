import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { HandleErrorInterceptor } from './shared/interceptors/handle-error-interceptor';
import { FirebaseService } from './shared/services/firebase.service';
import { ProjectsService } from './shared/services/projects.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      multi: true,
    },

    importProvidersFrom(HttpClientModule),
    FirebaseService,
    ProjectsService, provideAnimationsAsync(),
  ],
};
