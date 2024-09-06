import { Component } from '@angular/core';

@Component({
  selector: 'app-extralongdrill',
  templateUrl: './extralongdrill.component.html',
  styleUrls: ['./extralongdrill.component.css']
})
export class ExtralongdrillComponent {
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
