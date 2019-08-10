import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Post} from './post';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {
  postDoc:AngularFirestoreDocument<Post>;
  postCollection:AngularFirestoreCollection<Post>;
  postRecentCollection:AngularFirestoreCollection<Post>;
 
  constructor(private _fb:AngularFirestore) {
    this.postCollection = this._fb.collection('blogPost');
    this.postRecentCollection = this._fb.collection<Post>('blogPost',ref=>
    {
      return ref.orderBy('published','desc').limit(5);
    })
  }

  getProduct() {
   return this._fb.collection('amazon_products').snapshotChanges();
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

  getPostData(id:string) {
    this.postDoc = this._fb.doc('blogPost/'+id);
    return this.postDoc.valueChanges();
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

}
