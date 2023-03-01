import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { HealthIssueComponent } from './health-issue/health-issue.component';
import { ProductsComponent } from './products/products.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { CarouselModule } from './carousel/carousel.module';
import { PopUpFormComponent } from './pop-up-form/pop-up-form.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFireModule } from "@angular/fire/compat";
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    ServicesSectionComponent,
    HealthIssueComponent,
    ProductsComponent,
    OurDoctorsComponent,
    PopUpFormComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCNjvNxuKL2f_ht5qJgdg7-akUj4z29jNU",
      authDomain: "angular-signup-602a2.firebaseapp.com",
      projectId: "angular-signup-602a2",
      storageBucket: "angular-signup-602a2.appspot.com",
      messagingSenderId: "406421121508",
      appId: "1:406421121508:web:ec92472e5b0604f43d7ff1"
    }),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
