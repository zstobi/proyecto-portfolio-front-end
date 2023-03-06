import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educationUrl = 'https://apfinalbackend.onrender.com/ed/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Education[]>{
    return this.http.get<Education[]>(this.educationUrl + 'list');
  }

  public detail(id:number): Observable<Education>{
    return this.http.get<Education>(this.educationUrl + `detail/${id}`);
  }

  public saveEd(ed:Education): Observable<any>{
    return this.http.post<any>(this.educationUrl + 'add', ed);
  }

  public updateEd(id:number, ed:Education): Observable<any>{
    return this.http.put<any>(this.educationUrl + `update/${id}`, ed);
  }

  public deleteEd(id:number): Observable<any>{
    return this.http.delete<any>(this.educationUrl + `delete/${id}`);
  }

}
