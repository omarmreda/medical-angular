import { Component, Input ,  } from '@angular/core';

interface carouselImage{
  imageSrc : string;
  imageAlt : string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
@Input() images: carouselImage[] = [];
@Input() indicators = true;
@Input() controls = true;
currentImageIndex: number = 0;
carouselInterval: any;

ngOnInit() {
  this.startCarousel();
}

ngOnDestroy() {
  clearInterval(this.carouselInterval);
}

startCarousel() {
  this.carouselInterval = setInterval(() => {
    this.nextImage();
  }, 3000);
}

nextImage() {
  this.currentImageIndex++;
  if (this.currentImageIndex >= this.images.length) {
    this.currentImageIndex = 0;
  }
}

previousImage() {
  this.currentImageIndex--;
  if (this.currentImageIndex < 0) {
    this.currentImageIndex = this.images.length - 1;
  }
}

jumpToImage(index: number) {
  this.currentImageIndex = index;
}
}
