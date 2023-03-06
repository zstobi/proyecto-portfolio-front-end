import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../models/aboutme';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  aboutmeUrl = 'https://apfinalbackend.onrender.com/abtm/';

  constructor(private http: HttpClient) { }

  public list(): Observable<AboutMe[]>{
    return this.http.get<AboutMe[]>(this.aboutmeUrl + 'list');
  }

  public detail(id:number): Observable<AboutMe>{
    return this.http.get<AboutMe>(this.aboutmeUrl + `detail/${id}`);
  }

  public saveAbtm(abtm:AboutMe): Observable<any>{
    return this.http.post<any>(this.aboutmeUrl + 'add', abtm);
  }

  public updateAbtm(id:number, abtm:AboutMe): Observable<any>{
    return this.http.put<any>(this.aboutmeUrl + `update/${id}`, abtm);
  }

  public deleteAbtm(id:number): Observable<any>{
    return this.http.delete<any>(this.aboutmeUrl + `delete/${id}`);
  }
}
