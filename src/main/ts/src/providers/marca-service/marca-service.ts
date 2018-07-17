import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from "../utils/app-settings";

@Injectable()
export class MarcaServiceProvider
{

  private apiUrl = AppSettings.API_URL + '/marca/';

  constructor(private _http: HttpClient)
  { 
  }

  public findMarcaById(marcaId : Number): Observable<any>
  {
    return this._http.get(this.apiUrl + 'findMarcaById/' + marcaId);
  }

  public insertMarca(marca : any): Observable<any>
  {
    return this._http.post(this.apiUrl + 'insertMarca/', JSON.stringify(marca), AppSettings.httpOptions);
  }

  public updateMarca(marca : any): Observable<any>
  {
    return this._http.put(this.apiUrl + 'updateMarca/', JSON.stringify(marca), AppSettings.httpOptions);
  }

  public listMarcaByFilters(size: number): Observable<any>
  {
    const params = new HttpParams().set('size', size.toString());

    return this._http.get(this.apiUrl + 'listMarcasByFilters', {params});
  }

  public removeMarca(marcaId): Observable<any>
  {
    return this._http.delete(this.apiUrl + 'removeMarca/'+marcaId);
  }
}
