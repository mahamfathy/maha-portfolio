import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';

@Injectable()
export class ProjectsService {
  firebase = inject(FirebaseService);
  getProjects(): Observable<any> {
    return this.firebase.getRequest('projects');
  }
}
