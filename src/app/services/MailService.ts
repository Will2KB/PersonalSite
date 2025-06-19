import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './ConfigService';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})

export class MailService {

  private apiUrlMail = "mail";

  constructor(private http: HttpClient, private configService: ConfigService) {}
  
  sendMail(payload:any){
	console.log('Payload avec token reCAPTCHA v3 :', payload);
	return this.http.post(`${this.configService.apiUrl}/${this.apiUrlMail}`, payload);
  }

  // Charge le résumé et met à jour le sujet
//  loadPartialPerson(): Observable<PersonSummary> {
//    return this.http
//      .get<any>(`${this.configService.apiUrl}/${this.apiUrlPerson}/summary/id/${this.configService.defaultPersonId}`)
//      .pipe(
//        map((data:any) => {
//          return PersonSummary.fromJson(data);
//        }),
//        tap(personSummary => this.personSummarySubject.next(personSummary))
//      );
//  }
 
}
