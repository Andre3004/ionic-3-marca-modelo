import { HttpHeaders } from "@angular/common/http";

export class AppSettings 
{
    public static API_URL = 'http://192.168.20.65:8080/api';

    public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
}