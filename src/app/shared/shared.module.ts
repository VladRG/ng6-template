import { NgModule } from '@angular/core';
import { FlashMessageComponent } from './components';
import {
  MatCardModule, MatFormFieldModule, MatInputModule,
  MatSidenavModule, MatToolbarModule, MatButtonModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FlashMessageComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class AppSharedModule { }
