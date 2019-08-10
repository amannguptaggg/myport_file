import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class PostTypeService {

  constructor(public afs:AngularFirestore) { }

  
    // this.afs.collection('blogPost',ref=>ref.where("blogCategory",'==',cat)).snapshotChanges().subscribe(
    //   val=> {
    //             val.map(pst=>{
    //       return {
    //         id:pst.payload.doc.id,
    //         blogAuthor:pst.payload.doc.data()['blogAuthor'],
    //         blogCategory:pst.payload.doc.data()['blogCategory'],
    //         blogContent:pst.payload.doc.data()['blogContent'],
    //         blogImageLink:pst.payload.doc.data()['blogImageLink'],
    //         blogTitle:pst.payload.doc.data()['blogTitle'],
    //         published:pst.payload.doc.data()['published']
    //       }
    //     })
  }