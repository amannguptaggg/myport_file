import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class BlogCategoryService {

  constructor(private FireblogCat:AngularFirestore) { }

  blogCategories(){
    return this.FireblogCat.collection('postSettings').snapshotChanges();
  }
}

