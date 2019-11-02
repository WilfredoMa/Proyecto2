import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Orders } from 'src/app/orders';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  ordenes: Orders[];

  constructor(private _orders: OrdersService) { }

  ngOnInit() {
    this._orders.getItems().subscribe(item => {
      this.ordenes=item;
    })

    console.log(this.ordenes);
  }

}
