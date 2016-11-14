import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ApplicationRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserAccountService, HttpClient, ContentService, ClaimsGuardService } from './services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent, MenuAsideComponent, AppHeaderComponent } from './components/shared';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { GlobalService } from './services/global/global.service';
import { ForgotPasswordComponent, ResetPasswordComponent, HtmlComponent } from './components/shared';
import { EqualValidatorDirective } from './directives/equal-validator';
import { ContentListComponent, ContentEditComponent } from './components/backend';
import { CKEditorModule } from 'ng2-ckeditor';
import { HtmlContentPipe } from './directives/htmlContentPipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuAsideComponent,
    AppHeaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EqualValidatorDirective,
    ContentListComponent,
    ContentEditComponent,
    HtmlComponent,
    HtmlContentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ApplicationRoutes),
    NgbModule.forRoot(),
    CKEditorModule,
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
    ContentEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
