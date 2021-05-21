import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/appConfig.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
        console.log('Loaded config: ', this.appConfig);
      });
  }
  
  getConfig() {
    return this.appConfig;
  }
}
