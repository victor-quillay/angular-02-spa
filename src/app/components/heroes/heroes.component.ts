import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router) {
    console.log('constructor');
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  // tslint:disable-next-line:typedef
  verHeroe(i: number){
    this.router.navigate(['/heroe', i]);
  }

}
