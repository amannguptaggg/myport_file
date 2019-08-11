import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import { Post } from '../post';
import { Item } from '../marketplace/item';

@Injectable({
  providedIn: 'root'
})
export class BlogCategoryService {

  postCollect:AngularFirestoreCollection<Post>;
  itemCollect:AngularFirestoreCollection<Item>;

  postDoc:AngularFirestoreDocument<Post>;

  constructor(private FireblogCat:AngularFirestore) { 
    this.postCollect = this.FireblogCat.collection('blogPost');
    this.itemCollect = this.FireblogCat.collection('ItemPost');
  }

  blogCategories(){
    return this.FireblogCat.collection('postSettings').snapshotChanges();
  }
  itemCategories(){
    return this.FireblogCat.collection('ItemPost').snapshotChanges();
  }

  getAllBlogPost() {
    return this.postCollect.snapshotChanges().map(actions=>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data} 
      })
    })
  }

  

  getPostData(id:string) {
    this.postDoc = this.FireblogCat.doc('blogPost/'+id);
    return this.postDoc.valueChanges();
  }

  createPost(data:Post){
    this.postCollect.add(data)
  }

  getPost(id:string) {
    return this.FireblogCat.doc<Post>('blogPost/'+id);
  }

  deletePost(id:string){
    return this.getPost(id).delete();
  }

  updatePost(id:string,blogUpdatePost){
    return this.getPost(id).update(blogUpdatePost);
  }
}

