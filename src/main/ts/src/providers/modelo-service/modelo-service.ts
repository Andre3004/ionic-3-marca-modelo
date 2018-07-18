import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from "../utils/app-settings";

@Injectable()
export class ModeloServiceProvider
{

  private apiUrl = AppSettings.API_URL + '/modelo/';

  constructor(private _http: HttpClient)
  { 
  }

  public findModeloById(modeloId : Number): Observable<any>
  {
    return this._http.get(this.apiUrl + 'findModeloById/' + modeloId);
  }

  public insertModelo(modelo : any): Observable<any>
  {
    return this._http.post(this.apiUrl + 'insertModelo/', JSON.stringify(modelo), AppSettings.httpOptions);
  }

  public updateModelo(modelo : any): Observable<any>
  {
    return this._http.put(this.apiUrl + 'updateModelo/', JSON.stringify(modelo), AppSettings.httpOptions);
  }

  public listModeloByFilters(size: number): Observable<any>
  {
    const params = new HttpParams().set('size', size.toString());

    return this._http.get(this.apiUrl + 'listModelosByFilters', {params});
  }

  public removeModelo(modeloId): Observable<any>
  {
    return this._http.delete(this.apiUrl + 'removeModelo/'+modeloId);
  }
}
