import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component {
doctorsCount:number =20;
usersCount:number =1300;
pharmacyCount:number =0;
doctorsCountStop:any = setInterval(()=>{
  this.doctorsCount++;
  if(this.doctorsCount == 120){
    clearInterval(this.doctorsCountStop);
  }
},14)
usersCountStop:any = setInterval(()=>{
  this.usersCount++;
  if(this.usersCount == 1400){

    clearInterval(this.usersCountStop);
  }
},14)
pharmacyCountStop:any = setInterval(()=>{
  this.pharmacyCount++;
  if(this.pharmacyCount == 80){
    clearInterval(this.pharmacyCountStop);
  }
},14)
}
