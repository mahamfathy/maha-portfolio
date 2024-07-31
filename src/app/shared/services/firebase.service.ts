import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firebaseUrl } from '../firebase/firebase-url';

@Injectable()
export class FirebaseService {
  constructor(private http: HttpClient) {}
  getRequest<T>(name: string): Observable<T> {
    return this.http.get<T>(`${firebaseUrl}${name}.json`);
  }
}
