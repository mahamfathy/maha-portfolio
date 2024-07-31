import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from '../models/project';
import { FirebaseService } from './firebase.service';

@Injectable()
export class ProjectsService {
  firebase = inject(FirebaseService);
  getProjects(): Observable<Project[]> {
    return this.firebase
      .getRequest<Project[]>('projects')
      .pipe(map((projects) => Object.values(projects)));
  }
}
