import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Person } from '../model/person';
import{ Address } from '../model/address';
import{ ExperienceSummary } from '../model/experienceSummary';
import { PersonSummary } from '../model/personSummary';
import { ConfigService } from './ConfigService';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrlPerson = "persons";

  // Subjects pour partage des données
  private personSummarySubject = new BehaviorSubject<PersonSummary | null>(null);
  personSummary$ = this.personSummarySubject.asObservable();

  private personSubject = new BehaviorSubject<Person | null>(null);
  person$ = this.personSubject.asObservable();

  constructor(private http: HttpClient, private configService: ConfigService) {}

  // Charge le résumé et met à jour le sujet
  loadPartialPerson(): Observable<PersonSummary> {
    return this.http
      .get<any>(`${this.configService.apiUrl}/${this.apiUrlPerson}/summary/id/${this.configService.defaultPersonId}`)
      .pipe(
        map((data:any) => {
          return PersonSummary.fromJson(data);
        }),
        tap(personSummary => this.personSummarySubject.next(personSummary))
      );
  }
  
  // Accès synchrones aux données déjà chargées
  getCurrentPersonSummary(): PersonSummary | null {
    return this.personSummarySubject.value;
  }

  getCurrentPerson(): Observable<Person> {
    return this.http.get<any>(`${this.configService.apiUrl}/${this.apiUrlPerson}/id/${this.configService.defaultPersonId}`)
      .pipe(
        map((data:any) => {
          return Person.fromJson(data);
        })
      );
  }
}
