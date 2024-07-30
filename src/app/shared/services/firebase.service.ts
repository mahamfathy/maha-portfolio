import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firebaseUrl } from '../firebase/firebase-url';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<any> {
    return this.httpClient.get(`${firebaseUrl}projects.json`);
  }
}
