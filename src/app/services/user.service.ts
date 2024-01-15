import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, first, map, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  /**
   * Get users list from the API
   * @returns An observable with the list of users
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url).pipe(first());
  }

  /**
   * Create a new user in the API
   * @param userData An object of type User with all the user information to be stored in the API
   * @returns If the request is correct, it won't return nothing but a message in the console with the result. If there is an error, it will return null and an error message in the console
   */
  createUser(userData: User): Observable<User | null> {
    return this.http.post<User>(this._url, userData)
    .pipe(
      tap(() => console.log('User successfully created')),
      catchError((error) => {
        console.log('Error creating user', error);
        return of(null);
      })
    )
  }

  /**
   * Check if the entered email is unique or not compared to all users emails
   * @param email The email entered by the user
   * @returns true if the email is unique, false otherwise. If there is an error, it will return null and an error message in the console
   */
  isEmailUnique(email: string): Observable<boolean | null> {
    return this.getUsers()
      .pipe(
        map((users) => users.every((user) => user.email !== email)),
        catchError((error) => {
          console.log('Error while trying to validate if email is unique:', error);
          return of(null);
        })
      );
  }
}