import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ApplicationRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UserAccountService, HttpClient, ContentService, ClaimsGuardService } from './services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent, MenuAsideComponent, AppHeaderComponent } from './components/shared';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { GlobalService } from './services/global/global.service';
import { ForgotPasswordComponent, ResetPasswordComponent } from './components/shared';
import { EqualValidator } from './directives/equal-validator';
import { XHRBackend, RequestOptions } from '@angular/http';
import { ContentListComponent, HtmlListComponent } from './components/backend';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuAsideComponent,
    AppHeaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EqualValidator,
    ContentListComponent,
    HtmlListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ApplicationRoutes),
    NgbModule.forRoot(),
  ],
  providers: [
     ClaimsGuardService,
     CookieService,
     UserAccountService,
     GlobalService,
     HttpClient,
     ContentService
  ],
  entryComponents: [
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
