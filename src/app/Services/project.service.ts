import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'http://localhost:8000/api';
  constructor( private http: HttpClient) {}

  public getListProject() {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }

  public getProjectById(projectId) {
    return this.http.get<any>(`${this.apiUrl}/projects/${projectId}`);
  }

  public addProject(data) {
    return this.http.post<any>(`${this.apiUrl}/projects/add`, data);
  }

  public editProject(projectid, data) {
    return this.http.put<any>(`${this.apiUrl}/projects/${projectid}/edit`, data);
  }

  public removeProject(projectid) {
    return this.http.delete<any>(`${this.apiUrl}/projects/${projectid}/delete`);
  }
}
