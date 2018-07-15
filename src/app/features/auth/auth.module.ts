import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth.router';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [AuthRoutingModule]
})
export class AuthModule { }
