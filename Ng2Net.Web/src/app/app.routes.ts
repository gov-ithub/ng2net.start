import { Routes } from '@angular/router';
import {  } from './components/shared';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent, ForgotPasswordComponent, ResetPasswordComponent } from './components/shared';
import { ContentListComponent } from './components/backend/';
import { ClaimsGuardService } from './services'

export const ApplicationRoutes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password/:userId', component: ResetPasswordComponent },
      { path: '', component: HomeComponent, data: { claims: [ 'adminLogin' ] },  canActivate: [ ClaimsGuardService ] },

      // Backend Routes
      { path: 'backend/content-list', component: ContentListComponent,  data: { claims: [ 'editHtmlContent', 'developer' ]}, canActivate: [ ClaimsGuardService ] }
            
];
