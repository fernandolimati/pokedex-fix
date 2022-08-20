import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public listPokemons: any;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.mainService.listAllPokemons().subscribe( res => {
      this.listPokemons = res.results;
      });
  }
}

