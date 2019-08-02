import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  constructor(private _fb:AngularFirestore) { }

  getProduct() {
   return this._fb.collection('amazon_products').snapshotChanges();
  }

}
