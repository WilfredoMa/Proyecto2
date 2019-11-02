import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

  movies: any[];
  onHover = false;
  Input = false;
  search= '';
  constructor(
    private _movies: MoviesService
  ) {

    this.movies = this._movies.movies;

   }

  ngOnInit() {
  }

  isHover(){
    this.onHover= !this.onHover;
  }

  showInput(){
    this.Input = !this.Input;
  }

}
