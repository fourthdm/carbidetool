import { Component } from '@angular/core';

@Component({
  selector: 'app-throughcoolestdrill',
  templateUrl: './throughcoolestdrill.component.html',
  styleUrls: ['./throughcoolestdrill.component.css']
})
export class ThroughcoolestdrillComponent {
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
