import { Component } from '@angular/core';

@Component({
  selector: 'app-standardendmill',
  templateUrl: './standardendmill.component.html',
  styleUrls: ['./standardendmill.component.css']
})
export class StandardendmillComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
