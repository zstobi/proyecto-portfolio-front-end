import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Techs } from '../models/techs';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  techsUrl = 'http://localhost:8080/techs/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Techs[]>{
    return this.http.get<Techs[]>(this.techsUrl + 'list');
  }

  public detail(id:number): Observable<Techs>{
    return this.http.get<Techs>(this.techsUrl + `detail/${id}`);
  }

  public saveTech(ts:Techs): Observable<any>{
    return this.http.post<any>(this.techsUrl + 'add', ts);
  }

  public updateTech(id:number, ts:Techs): Observable<any>{
    return this.http.put<any>(this.techsUrl + `update/${id}`, ts);
  }

  public deleteTech(id:number): Observable<any>{
    return this.http.delete<any>(this.techsUrl + `delete/${id}`);
  }

}
