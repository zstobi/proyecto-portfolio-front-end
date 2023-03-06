import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsUrl = 'https://apfinalbackend.onrender.com/prjs/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Projects[]>{
    return this.http.get<Projects[]>(this.projectsUrl + 'list');
  }

  public detail(id:number): Observable<Projects>{
    return this.http.get<Projects>(this.projectsUrl + `detail/${id}`);
  }

  public savePrjs(prjs:Projects): Observable<any>{
    return this.http.post<any>(this.projectsUrl + 'add', prjs);
  }

  public updatePrjs(id:number, prjs:Projects): Observable<any>{
    return this.http.put<any>(this.projectsUrl + `update/${id}`, prjs);
  }

  public deletePrjs(id:number): Observable<any>{
    return this.http.delete<any>(this.projectsUrl + `delete/${id}`);
  }

}
