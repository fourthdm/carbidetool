import { Component } from '@angular/core';

@Component({
  selector: 'app-deepslotting',
  templateUrl: './deepslotting.component.html',
  styleUrls: ['./deepslotting.component.css']
})
export class DeepslottingComponent {
  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  constructor() { }

  ngOnInit(): void {

  }
}
