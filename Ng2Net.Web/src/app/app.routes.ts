import { Routes } from '@angular/router';
import { ContentListComponent } from './components/backend/';
import { ClaimsGuardService } from './services';
import { BackendRoutes } from './components/backend/backend.routes';
import { BackendMasterComponent } from './components/backend'

export const ApplicationRoutes: Routes = [
      { path: 'admin', component: BackendMasterComponent, children: BackendRoutes },
];
