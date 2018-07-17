import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth.router';
import { AuthService } from './auth.service';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent
  ],
  providers: [AuthService],
  imports: [
    AppSharedModule,
    AuthRoutingModule
  ]
})
export class AppAuthModule { }
