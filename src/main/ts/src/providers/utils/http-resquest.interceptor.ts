import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import
{
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor
{
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>>
    {

        console.log(req)
        // const dupReq = req.clone({
        //     headers: req.headers.set('key', 'DCtbqRXC8L'),
        // });
        return next.handle(req);
    }
}