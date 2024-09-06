import { Component } from '@angular/core';

@Component({
  selector: 'app-strightflute',
  templateUrl: './strightflute.component.html',
  styleUrls: ['./strightflute.component.css']
})
export class StrightfluteComponent {
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
