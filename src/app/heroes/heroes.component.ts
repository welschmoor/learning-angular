import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  hero: Hero = { name: 'Windstorm', id: 1 };
  constructor() { }

  ngOnInit(): void {
  }

}
