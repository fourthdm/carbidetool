import { Component } from '@angular/core';

@Component({
  selector: 'app-woodrufcutter',
  templateUrl: './woodrufcutter.component.html',
  styleUrls: ['./woodrufcutter.component.css']
})
export class WoodrufcutterComponent {
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
