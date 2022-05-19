import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/home-page/login-form/login-form.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { LoggedUserPageComponent } from './components/home-page/logged-user-page/logged-user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    LoggedUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
