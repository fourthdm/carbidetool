import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  completesquarefit: number = 0;
  estop: any = setInterval(() => {
    this.completesquarefit++;

    if (this.completesquarefit == 450) {
      clearInterval(this.estop);
    }
  }, 0.2);

  work: number = 0;
  workstop: any = setInterval(() => {
    this.work++;
    if (this.work == 124) {
      clearInterval(this.workstop);
    }
  }, 0.8);



  review: number = 0;
  reviewstop: any = setInterval(() => {
    this.review++;

    if (this.review === 4) {
      clearInterval(this.reviewstop);
    }
  }, 20);


  client: number = 0;
  clientstop: any = setInterval(() => {
    this.client++;

    if (this.client == 103) {
      clearInterval(this.clientstop);
    }
  }, 0.5);
}
