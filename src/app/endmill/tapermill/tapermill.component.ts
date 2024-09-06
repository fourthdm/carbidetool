import { Component } from '@angular/core';

@Component({
  selector: 'app-tapermill',
  templateUrl: './tapermill.component.html',
  styleUrls: ['./tapermill.component.css']
})
export class TapermillComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
