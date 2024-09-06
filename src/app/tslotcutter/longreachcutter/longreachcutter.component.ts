import { Component } from '@angular/core';

@Component({
  selector: 'app-longreachcutter',
  templateUrl: './longreachcutter.component.html',
  styleUrls: ['./longreachcutter.component.css']
})
export class LongreachcutterComponent {
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
