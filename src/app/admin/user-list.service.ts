import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private _fb:AngularFirestore) { }
  UserCollection(){
    return this._fb.collection('userContact').snapshotChanges();
  }
}
