import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  login(userName: any, password: any): Observable<jwtResponse> {
    let requestBody = {
        "username": userName,
        "password": password
      }
    return this.httpClient.post<jwtResponse>(environment.host + 'api-token-auth/', requestBody, this.httpOptions);
//     return this.httpClient.post<jwtResponse>('https://hazmat-reach-cat.herokuapp.com/api-token-auth/', requestBody, this.httpOptions);
  }
 
}
export class jwtResponse {
  token: string;
}
