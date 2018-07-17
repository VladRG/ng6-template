import { NgModule } from '@angular/core';
import { IsLoggedInGuard, IsLoggedOutGuard } from './guards';

@NgModule({
  providers: [
    IsLoggedInGuard,
    IsLoggedOutGuard
  ]
})
export class AppCoreModule { }
