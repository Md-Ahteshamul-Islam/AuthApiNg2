import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

   // Define API
   apiURL = 'https://localhost:44311/api';

   constructor(private http: HttpClient) { }
 
   /*========================================
     CRUD Methods for consuming RESTful API
   =========================================*/
 
   // Http Options
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'username': 'Rasel',
  'password': 'Pass1',
     })
}

// HttpClient API get() method => Fetch Users list
getUserList(): Observable<User[]> {
  // return this.http.get<User>(this.apiURL + '/values', this.httpOptions)
  return this.http.get<User[]>(this.apiURL + '/values')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}



// Error handling 
handleError(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}
// help from https://www.positronx.io/angular-7-httpclient-http-service/
