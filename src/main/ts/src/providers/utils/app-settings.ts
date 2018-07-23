import { HttpHeaders } from "@angular/common/http";

export class AppSettings 
{
    //public static API_URL = 'https://ionicmarcamodelo.herokuapp.com/api'; //servidor
    public static API_URL = 'http://localhost:8080/api'; //local

    public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        method: 'POST'
    };
}