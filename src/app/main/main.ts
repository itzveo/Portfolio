import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Skills } from "./skills/skills";
import { Portfolio } from "./portfolio/portfolio";
import { Reviews } from "./reviews/reviews";
import { ContactComponent } from "./contact/contact";

@Component({
  selector: 'app-main',
  imports: [Hero, About, Skills, Portfolio, Reviews, ContactComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
