import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { RegisterComponent } from './shared/components/auth/register/register.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { BlogListComponent } from './shared/components/auth/blog-list/blog-list.component';
import { BlogDetailComponent } from './shared/components/auth/blog-detail/blog-detail.component';
import { BlogModalComponent } from './shared/components/auth/blog-modal/blog-modal.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/auth/navbar/navbar.component';
import { HomeComponent } from './shared/components/auth/home/home.component';
import { MaterialModule } from './shared/material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogBoxComponent } from './shared/components/auth/confirm-dialog-box/confirm-dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogModalComponent,
    NavbarComponent,
    HomeComponent,
    ConfirmDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
