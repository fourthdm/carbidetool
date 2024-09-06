import { Component } from '@angular/core';

@Component({
  selector: 'app-stependmill',
  templateUrl: './stependmill.component.html',
  styleUrls: ['./stependmill.component.css']
})
export class StependmillComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
