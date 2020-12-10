import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestheaderService {

  constructor() { }


  httpheader = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': "Basic cmVhY2g6UEAkJHdyZDE="//remove this just for local dev
    })
  };

  setHttpHeaders(jwt){
    this.httpheader = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "JWT " + jwt
      })
    }
  }
}
