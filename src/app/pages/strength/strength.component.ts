import { Component } from '@angular/core';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent {
  scrolltop = document.getElementById("scrolltop");
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
