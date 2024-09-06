import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughcoolestendmill',
  templateUrl: './thoughcoolestendmill.component.html',
  styleUrls: ['./thoughcoolestendmill.component.css']
})
export class ThoughcoolestendmillComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
