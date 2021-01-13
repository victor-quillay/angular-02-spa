import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {
    console.log('constructor');
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

}
