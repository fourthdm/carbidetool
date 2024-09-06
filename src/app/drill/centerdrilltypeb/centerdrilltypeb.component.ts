import { Component } from '@angular/core';

@Component({
  selector: 'app-centerdrilltypeb',
  templateUrl: './centerdrilltypeb.component.html',
  styleUrls: ['./centerdrilltypeb.component.css']
})
export class CenterdrilltypebComponent {
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
