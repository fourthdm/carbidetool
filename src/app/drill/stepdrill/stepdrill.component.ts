import { Component } from '@angular/core';

@Component({
  selector: 'app-stepdrill',
  templateUrl: './stepdrill.component.html',
  styleUrls: ['./stepdrill.component.css']
})
export class StepdrillComponent {
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
