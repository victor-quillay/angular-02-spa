import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  param!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.param = params.param;
      this.heroes = this.heroesService.buscarHeroes(params.param);
      console.log(this.heroes);
    });
  }

  verHeroe(i: number): void{
    this.router.navigate(['/heroe', i]);
  }

}
