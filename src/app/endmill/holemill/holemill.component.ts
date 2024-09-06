import { Component } from '@angular/core';

@Component({
  selector: 'app-holemill',
  templateUrl: './holemill.component.html',
  styleUrls: ['./holemill.component.css']
})
export class HolemillComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
