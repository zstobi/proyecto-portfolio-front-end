import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkills } from '../models/softskills';

@Injectable({
  providedIn: 'root'
})
export class SoftskillsService {

  softskillsUrl = 'http://localhost:8080/ss/';

  constructor(private http: HttpClient) { }

  public list(): Observable<SoftSkills[]>{
    return this.http.get<SoftSkills[]>(this.softskillsUrl + 'list');
  }

  public detail(id:number): Observable<SoftSkills>{
    return this.http.get<SoftSkills>(this.softskillsUrl + `detail/${id}`);
  }

  public saveSS(ss:SoftSkills): Observable<any>{
    return this.http.post<any>(this.softskillsUrl + 'add', ss);
  }

  public updateSS(id:number, ss:SoftSkills): Observable<any>{
    return this.http.put<any>(this.softskillsUrl + `update/${id}`, ss);
  }

  public deleteSS(id:number): Observable<any>{
    return this.http.delete<any>(this.softskillsUrl + `delete/${id}`);
  }

}
