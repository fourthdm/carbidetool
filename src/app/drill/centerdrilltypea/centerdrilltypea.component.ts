import { Component } from '@angular/core';

@Component({
  selector: 'app-centerdrilltypea',
  templateUrl: './centerdrilltypea.component.html',
  styleUrls: ['./centerdrilltypea.component.css']
})
export class CenterdrilltypeaComponent {
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
