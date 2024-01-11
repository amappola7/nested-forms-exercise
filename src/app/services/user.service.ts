import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, every, first, map, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url).pipe(first());
  }

  isEmailUnique(email: string): Observable<boolean | null> {
    return this.getUsers()
      .pipe(
        map((users) => users.map((user) => user.email !== email)),
        every(results => { console.log(results); return false }
        ));
  }
}