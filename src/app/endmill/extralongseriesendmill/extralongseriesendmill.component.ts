import { Component } from '@angular/core';

@Component({
  selector: 'app-extralongseriesendmill',
  templateUrl: './extralongseriesendmill.component.html',
  styleUrls: ['./extralongseriesendmill.component.css']
})
export class ExtralongseriesendmillComponent {
  
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
