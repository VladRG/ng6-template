import { NgModule } from '@angular/core';
import { IsLoggedInGuard, IsLoggedOutGuard } from './guards';
import { AuthService } from './services';

@NgModule({
  providers: [
    IsLoggedInGuard,
    IsLoggedOutGuard,
    AuthService
  ]
})
export class AppCoreModule { }
