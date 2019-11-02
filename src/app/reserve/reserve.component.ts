import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  name;
  phone;
  nrTickets;
  Id;
  movie;


  constructor(private rutaActiva: ActivatedRoute ,private _movies: MoviesService ) { }

  ngOnInit() {
    
    this.Id = this.rutaActiva.snapshot.paramMap.get('Id');

    this.movie = this._movies.movies.find(item=>{
      return item.Id === this.Id;
    })


  }

  samuelito(){
    
    this.name = (document.getElementById('name') as HTMLInputElement).value;
    this.phone = (document.getElementById('fono') as HTMLInputElement).value;
    this.nrTickets = (document.getElementById('tickets') as HTMLInputElement).value;
    const movie = {nameMovie:this.movie.Title, nameCustomer: this.name, nrTickets: this.nrTickets, phone: this.phone, Id:this.Id};
    this._movies.addOrder(movie);
  }

}
