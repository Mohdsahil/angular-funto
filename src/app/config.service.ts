import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
  responseType: 'json' as const
};


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
   api:string = 'http://localhost:7000/api';
  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    return this.http.get(url);
  }

  getUserById(id:any) {
     const url = "https://jsonplaceholder.typicode.com/users/" + id;

    return this.http.get(url);
  }

  login(userLoginData:any): Observable<any> {
    return this.http.post(`${this.api}/singin`, userLoginData, httpOptions)   
  }

  isAuthenticated(): any {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return localStorage.getItem("jwt");
    } else {
      return false;
    }
  }

}
