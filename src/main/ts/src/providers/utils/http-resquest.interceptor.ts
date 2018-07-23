import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import
{
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor
{
    constructor(private authServiceProvider: AuthServiceProvider) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>>
    {

        if(this.authServiceProvider.token)
        {
            const dupReq = req.clone({
                headers: req.headers.set('Authorization', this.authServiceProvider.token),
            });
            
            return next.handle(dupReq);
        }


        
        return next.handle(req);

    }
}