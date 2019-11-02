import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  name;
  phone;
  nrTickets;


  constructor( private _movies: MoviesService ) { }

  ngOnInit() {
  }

  samuelito(){
    
    this.name = (document.getElementById('name') as HTMLInputElement).value;
    this.phone = (document.getElementById('fono') as HTMLInputElement).value;
    this.nrTickets = (document.getElementById('tickets') as HTMLInputElement).value;
    const movie = {name:this.name, phone: this.phone, nrTickets: this.nrTickets};
    this._movies.addOrder(movie);
  }

}
