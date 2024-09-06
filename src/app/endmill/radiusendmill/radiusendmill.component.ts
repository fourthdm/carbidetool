import { Component } from '@angular/core';

@Component({
  selector: 'app-radiusendmill',
  templateUrl: './radiusendmill.component.html',
  styleUrls: ['./radiusendmill.component.css']
})
export class RadiusendmillComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
}
