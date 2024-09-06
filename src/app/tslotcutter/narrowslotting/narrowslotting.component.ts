import { Component } from '@angular/core';

@Component({
  selector: 'app-narrowslotting',
  templateUrl: './narrowslotting.component.html',
  styleUrls: ['./narrowslotting.component.css']
})
export class NarrowslottingComponent {
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
