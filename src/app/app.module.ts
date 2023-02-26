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
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
