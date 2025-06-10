import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(config => this.config = config);
  }

  get apiUrl(): string {
    return this.config?.apiUrl;
  }

  get defaultPersonId(): number {
    return this.config?.defaultPersonId;
  }
}
