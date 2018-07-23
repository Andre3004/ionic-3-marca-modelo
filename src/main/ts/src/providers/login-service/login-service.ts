import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../utils/app-settings';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable()
export class LoginServiceProvider
{


  private apiUrl = AppSettings.API_URL;

  constructor(private _http: HttpClient)
  {
  }

  public login(usuario): Observable<any>
  {    
    const authorization = {"email": usuario.email, "senha": usuario.senha}
    console.log(authorization)

    return this._http.post(this.apiUrl + '/login', authorization )
      // .pipe(tap(res =>
      // {
      //   const authToken = res.headers.get('authorization');
      //   console.log(authToken)
      // }));
  }

}
