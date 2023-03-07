import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { WorkingConfirmation } from '../models/itworks';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private http: HttpClient) { }

  login(creds: Credentials) {
    return this.http.post('https://apfinalbackend.onrender.com/login',creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ','');

      localStorage.setItem('token',token);

      return body;
    }));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
