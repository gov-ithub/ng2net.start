import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers, ConnectionBackend, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/share';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Injectable()
export class HttpClient {
    constructor(private http: Http, private cookieService: CookieService) {
        
    }
    public loading: BehaviorSubject<number> = new BehaviorSubject(0);

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.loading.next(this.loading.value+1);
        var headers = this.createAuthHeader();
        
        var retValue = this.http.get(environment.apiUrl + url, { headers: headers }).share();

        retValue
        .catch(()=>{ return Observable.of(true); })
        .subscribe(res=>this.loading.next(this.loading.value-1));
        return retValue;
    }

    post(url: string, data: any, options?: RequestOptions): Observable<Response> {
        this.loading.next(this.loading.value+1);
        let headers = this.createAuthHeader();
        if (data!=null)
            headers.append('Content-Type', 'application/json');
        var retValue = this.http.post(environment.apiUrl + url, data, {headers: headers}).share();
        retValue
        .catch(()=>{ return Observable.of(true); })
        .subscribe(res=>this.loading.next(this.loading.value-1));
        return retValue;
    }

    private createAuthHeader(): Headers {
        let headers = new Headers({'Accept': 'application/json'}); 
        let authToken = this.cookieService.get('auth_token');

        if (authToken !== '') {
            headers.append('Authorization', 'Bearer ' + authToken);
        }        
        return headers;
    }


}