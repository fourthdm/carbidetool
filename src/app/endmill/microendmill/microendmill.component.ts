import { Component } from '@angular/core';

@Component({
  selector: 'app-microendmill',
  templateUrl: './microendmill.component.html',
  styleUrls: ['./microendmill.component.css']
})
export class MicroendmillComponent {
  
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
