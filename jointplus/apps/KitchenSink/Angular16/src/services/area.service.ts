import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Area {
  id?: number;
  name: string;
  imageLink: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private baseUrl = 'http://localhost:8080/api/areas';

  constructor(private http: HttpClient) { }

  getAllAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.baseUrl}`);
  }

  getAreaById(id: number): Observable<Area> {
    return this.http.get<Area>(`${this.baseUrl}/${id}`);
  }

  createArea(area: Area): Observable<Area> {
    return this.http.post<Area>(`${this.baseUrl}`, area);
  }

  updateArea(id: number, area: Area): Observable<Area> {
    return this.http.put<Area>(`${this.baseUrl}/${id}`, area);
  }

  deleteArea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
