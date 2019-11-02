import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Orders } from 'src/app/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  itemsCollection: AngularFirestoreCollection<Orders>;
  items: Observable<Orders[]>

  constructor(private fs: AngularFirestore) {
    const x = this.fs.collection<Orders>('Movies').valueChanges();
    this.items = x;

   }

   getItems(){
     return this.fs.collection<Orders>('Movies').valueChanges();;

   }

   orden(x){
     this.fs.collection('Movies').add(x);
   }
}
