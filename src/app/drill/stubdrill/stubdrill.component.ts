import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stubdrill',
  templateUrl: './stubdrill.component.html',
  styleUrls: ['./stubdrill.component.css']
})
export class StubdrillComponent implements OnInit {

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
