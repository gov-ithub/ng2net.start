import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient } from '../httpClient/httpClient';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserAccountService {

  public currentUser: any = {};
  public redirectTo: string;
  public authError: string;

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  login(loginModel: any): Observable<any> {
    let body = 'UserName=' + loginModel.email + '&Password=' + loginModel.password + '&grant_type=password';
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let obs = this.http.post('/api/token', body, new RequestOptions({ headers: headers }))
      .map((result) => result.json())
      .catch((res) => { console.log(res); return Observable.of(res).map(o => o.json()); })
      .share();

      obs.subscribe((result) => {
        let expDate = new Date();
        expDate.setSeconds(expDate.getSeconds() + result.expires_in);
        this.cookieService.put('auth_token', result.access_token, { expires: expDate });
        this.getCurrentUser(true);
        if (result !== null && result.error) {
          this.authError = result.error_description;
        } else {
          this.authError = undefined;
        }

      },
      (err) => { this.authError = err; });
      return obs;
  }

  getCurrentUser(force = false) {
    if (!this.currentUser.id || force) {
      let obs = this.http.get('/api/account/me').map((result) => result.json()).share();
      obs.subscribe((result) => {
          this.currentUser = result || this.currentUser;
      });
      return obs;
    }
  }

  logout() {
    this.currentUser = { };
    this.cookieService.remove('auth_token');
  }

  sendResetPasswordLink(email: string) {
        let obs = this.http.post('/api/account/send-reset-password', { 'Email': email })
      .map((result) => result.json())
      .share();
      return obs;
  }

  resetPassword(userId: string, token: string, password: string) {
        let obs = this.http.post('/api/account/reset-password', { 'UserId': userId, 'Token': token, 'Password': password })
      .map((result) => result.json())
      .share();
      return obs;
  }
}
