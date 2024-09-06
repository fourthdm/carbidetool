import { Component } from '@angular/core';

@Component({
  selector: 'app-ncspotdrill',
  templateUrl: './ncspotdrill.component.html',
  styleUrls: ['./ncspotdrill.component.css']
})
export class NcspotdrillComponent {
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
