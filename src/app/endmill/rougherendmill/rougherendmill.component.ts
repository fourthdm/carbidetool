import { Component } from '@angular/core';

@Component({
  selector: 'app-rougherendmill',
  templateUrl: './rougherendmill.component.html',
  styleUrls: ['./rougherendmill.component.css']
})
export class RougherendmillComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
