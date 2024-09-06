import { Component } from '@angular/core';

@Component({
  selector: 'app-burnishingdrill',
  templateUrl: './burnishingdrill.component.html',
  styleUrls: ['./burnishingdrill.component.css']
})
export class BurnishingdrillComponent {

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