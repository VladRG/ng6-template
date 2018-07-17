import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder) {
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
}