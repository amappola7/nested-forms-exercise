import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, catchError, of, map, switchMap } from "rxjs";
import { UserService } from "src/app/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueEmailValidator implements AsyncValidator {
  constructor(private userService: UserService) { }

  validate(control: AbstractControl): Observable<any> {
    return this.userService.isEmailUnique(control.value).pipe(
      map((isUnique) => (isUnique ? null : {uniqueEmail: true})),
      catchError((error) => {
        console.log('Error in the UniqueEmailValidator', error);
        return of(false);
      })
    );
  }
}