import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MarcaServiceProvider
{

  private apiUrl = 'http://192.168.25.236:8080/api/marca/';

  private header = { "headers": {"Content-Type": "application/json"} };
  
  constructor(private _http: HttpClient)
  { 
    console.log('Hello MarcaServiceProvider Provider');
  }

  public findMarcaById(marcaId : Number): Observable<any>
  {
    return this._http.get(this.apiUrl + 'findMarcaById/' + marcaId);
  }

  public insertMarca(marca : any): Observable<any>
  {
    return this._http.post(this.apiUrl + 'insertMarca/', JSON.stringify(marca), this.header);
  }

  public listMarcaByFilters(): Observable<any>
  {
    return this._http.get(this.apiUrl + 'listMarcasByFilters');
  }

  public removeMarca(marcaId): Observable<any>
  {
    return this._http.delete(this.apiUrl + 'removeMarca/'+marcaId);
  }
}
