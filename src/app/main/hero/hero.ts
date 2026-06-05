import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  moveToContact(){
    document.getElementById('contact')?.scrollIntoView({
  });
  }
}
