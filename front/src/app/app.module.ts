import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/home-page/login-form/login-form.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { LoggedUserPageComponent } from './components/home-page/logged-user-page/logged-user-page.component';
import { UserRegistrationComponent } from './components/home-page/user-registration/user-registration.component';
import { UserProfileComponent } from './components/home-page/user-profile/user-profile.component';
import { AdministratorPageComponent } from './components/home-page/administrator-page/administrator-page.component';
import { AllRegisteredUsersComponent } from './components/home-page/all-registered-users/all-registered-users.component';
import { SearchedCarsPageComponent } from './components/home-page/searched-cars-page/searched-cars-page.component';
import { SearchedCarsForLoggedUsersComponent } from './components/home-page/searched-cars-for-logged-users/searched-cars-for-logged-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    LoggedUserPageComponent,
    UserRegistrationComponent,
    UserProfileComponent,
    AdministratorPageComponent,
    AllRegisteredUsersComponent,
    SearchedCarsPageComponent,
    SearchedCarsForLoggedUsersComponent
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
