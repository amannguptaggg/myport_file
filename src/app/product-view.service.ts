import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Post} from './post';
import 'rxjs-compat/add/operator/map';
import { Item } from './marketplace/item';
import 'rxjs-compat/operator/take';
import {Observable} from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {
  postDoc:AngularFirestoreCollection<Post>;
  postCollection:AngularFirestoreCollection<Post>;
  postRecentCollection:AngularFirestoreCollection<Post>;
  itemCollection:AngularFirestoreCollection<Item>
 
  constructor(private _fb:AngularFirestore) {
    this.postCollection = this._fb.collection('blogPost');

    this.itemCollection = this._fb.collection('amazon_products');

    this.postRecentCollection = this._fb.collection<Post>('blogPost',ref=>
    {
      return ref.orderBy('published','desc').limit(5);
    })
  }

  getAllBlogPost() {
    return this.postCollection.snapshotChanges().map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data} 
      })
    })
  } 

  getAllRecentBlogPost() {
    return this.postRecentCollection.snapshotChanges().map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data} 
      })
    })
  }

  getPostData(title:string) {
    return this._fb.collection('blogPost',ref=>ref.where("postURL",'==',title)).snapshotChanges()
    .map(snap=>{
      return snap.map(snapD=>{
         const id = snapD.payload.doc.id;
         const data = snapD.payload.doc.data() as Post;
         return {id , ...data}
      })
    })
  }

  loadPostType(blogType:string){
    return this._fb.collection('blogPost',ref=>ref.where("blogCategory",'==',blogType)).snapshotChanges().
      map(snaps=>{
        return snaps.map(snap=>{
          return {
            id:snap.payload.doc.id,
            ...snap.payload.doc.data()
          };
        })
      })
  }

  // Product Service

  getAllProduct() {
    return this.itemCollection.snapshotChanges().map(item=>{
      return item.map(i=>{
        const item = i.payload.doc.data() as Item;
        const id = i.payload.doc.id;
        return {id,...item} 
      })
    })
   }

}
