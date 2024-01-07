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
import { CarProfileComponent } from './components/home-page/car-profile/car-profile.component';
import { ShowUserPostsComponent } from './components/home-page/show-user-posts/show-user-posts.component';
import { CarProfileByLoggedUserComponent } from './components/home-page/car-profile-by-logged-user/car-profile-by-logged-user.component';
import { ShowRequestsForNewPostsComponent } from './components/home-page/show-requests-for-new-posts/show-requests-for-new-posts.component';
import { AddNewCarComponent } from './components/home-page/add-new-car/add-new-car.component';
import { CarProfileBySearchedCarsFromLoggedUsersComponent } from './components/home-page/car-profile-by-searched-cars-from-logged-users/car-profile-by-searched-cars-from-logged-users.component';
import { RegisteredCarsByLoggedUserComponent } from './components/home-page/registered-cars-by-logged-user/registered-cars-by-logged-user.component';
import { RegisteredCarsComponent } from './components/home-page/registered-cars/registered-cars.component';
import { CarProfileByRegisteredCarsFromLoggedUsersComponent } from './components/home-page/car-profile-by-registered-cars-from-logged-users/car-profile-by-registered-cars-from-logged-users.component';
import { CarProfileByRegisteredCarsComponent } from './components/home-page/car-profile-by-registered-cars/car-profile-by-registered-cars.component';

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
    SearchedCarsForLoggedUsersComponent,
    CarProfileComponent,
    ShowUserPostsComponent,
    CarProfileByLoggedUserComponent,
    ShowRequestsForNewPostsComponent,
    AddNewCarComponent,
    CarProfileBySearchedCarsFromLoggedUsersComponent,
    RegisteredCarsByLoggedUserComponent,
    RegisteredCarsComponent,
    CarProfileByRegisteredCarsFromLoggedUsersComponent,
    CarProfileByRegisteredCarsComponent,
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
