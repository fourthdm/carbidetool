import { Component } from '@angular/core';

@Component({
  selector: 'app-ballnseendmill',
  templateUrl: './ballnseendmill.component.html',
  styleUrls: ['./ballnseendmill.component.css']
})
export class BallnseendmillComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
