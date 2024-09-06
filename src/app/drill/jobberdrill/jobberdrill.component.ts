import { Component } from '@angular/core';

@Component({
  selector: 'app-jobberdrill',
  templateUrl: './jobberdrill.component.html',
  styleUrls: ['./jobberdrill.component.css']
})
export class JobberdrillComponent {

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
