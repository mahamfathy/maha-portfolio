import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { FirebaseService } from './shared/services/firebase.service';
import { ProjectsService } from './shared/services/projects.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    FirebaseService,
    ProjectsService,
  ],
};
