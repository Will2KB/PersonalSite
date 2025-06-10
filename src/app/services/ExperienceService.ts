import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Experience } from '../model/experience';
import { ConfigService } from './ConfigService';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrlExperience = "experiences";

  constructor(private http: HttpClient, private configService: ConfigService) {}
  
  getExperienceDetails(id: number): Observable<Experience> {
    return this.http.get<Experience>(`${this.configService.apiUrl}/${this.apiUrlExperience}/id/${id}`);
  }
}
