import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppLayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppLayoutComponent
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
