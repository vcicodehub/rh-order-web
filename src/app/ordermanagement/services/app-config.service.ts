import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private _appConfig;
  private _host;

  constructor(private http: HttpClient) { }

  loadAppConfig() {
    return this.http.get('/assets/appConfig.json')
      .toPromise()
      .then(data => {
        this._appConfig = data;
        //this._host = this._appConfig["api-gateway-host"];
        this._host = this._appConfig["elb-host"];
        console.log('Loaded config: ', this._appConfig);
      });
  }
  
  getHost() {
    return this._host;
  }
}
