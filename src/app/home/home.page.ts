import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lines = [];
  constructor() {
    for (let i = 0; i < 200; i++) {
      this.lines.push(i.toString());
    }
  }

}
