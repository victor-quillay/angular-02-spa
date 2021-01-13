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

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(i: number): void{
    this.router.navigate(['/heroe', i]);
  }

}
