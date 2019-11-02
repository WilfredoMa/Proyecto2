import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie-x',
  templateUrl: './movie-x.component.html',
  styleUrls: ['./movie-x.component.scss']
})
export class MovieXComponent implements OnInit {

  Id;
  movie;
  seats=0;
  available;
  cmSoon;

  constructor(private rutaActiva: ActivatedRoute, private _movies: MoviesService ) { }

  ngOnInit() {

    this.Id = this.rutaActiva.snapshot.paramMap.get('Id');

    this.movie = this._movies.movies.find(item=>{
      return item.Id === this.Id;
    })

    this.available = this.movie.Available;
    this.cmSoon = this.movie.ComingSoon;

    
  }

  plusSeat(){
    this.seats +=1;
  }

  isFull(): boolean{

    return this.seats>=30;

  }

}
