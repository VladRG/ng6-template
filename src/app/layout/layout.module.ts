import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppLayoutComponent } from './layout.component';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppLayoutComponent
  ],
  imports: [AppSharedModule],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
