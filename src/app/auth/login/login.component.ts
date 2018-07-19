import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppRootState } from '@app/state';
import { Credentials } from '@app/models';
import * as AppRootActions from '@app/state/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private store: Store<AppRootState>) {
    this.createForm();
  }

  loginForm: FormGroup;

  ngOnInit() { }

  private createForm() {
    this.loginForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const credentials = this.loginForm.value as Credentials;
    this.store.dispatch(new AppRootActions.Login(credentials));
  }
}
