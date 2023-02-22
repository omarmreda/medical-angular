import { Component } from '@angular/core';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.scss']
})
export class OurDoctorsComponent {
  images = [
    {
      imageSrc : 'assets/dr1-array.png',
      imageAlt : 'dr1'
    },
    {
      imageSrc : 'assets/dr2-array.png',
      imageAlt : 'dr2'
    },
    {
      imageSrc : 'assets/dr3-array.png',
      imageAlt : 'dr3'
    },
    {
      imageSrc : 'assets/dr4-array.png',
      imageAlt : 'dr4'
    }
  ]
}
