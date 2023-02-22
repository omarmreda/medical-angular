import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    ServicesSectionComponent,
    HealthIssueComponent,
    ProductsComponent,
    OurDoctorsComponent,
    PopUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
