import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../utils/app-settings';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage'


@Injectable()
export class AuthServiceProvider
{


  private apiUrl = AppSettings.API_URL;

  public token = '';

  constructor(private httpClient: HttpClient, private _storage: Storage)
  {
    this.getToken();
  }

  public login(usuario): Observable<any>
  {
    return this.httpClient.post(this.apiUrl + '/login', usuario, { observe: 'response' })
      .pipe(tap(res =>
      {
        const authToken = res.headers.get('authorization');
        this._storage.set('AUTH_TOKEN', authToken);
      }));
  }

  public logout(): void
  {
    this._storage.remove('AUTH_TOKEN');
  }

  public getToken(): Promise<string>
  {
    return this._storage.get('AUTH_TOKEN').then(token => this.token = token);
  }

}
