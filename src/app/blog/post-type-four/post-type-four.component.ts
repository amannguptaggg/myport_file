import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-post-type-four',
  templateUrl: './post-type-four.component.html',
  styleUrls: ['../blog-home/blog-home.component.css']
})

export class PostTypeFourComponent implements OnInit {
  public postType:any;
  constructor(private afs:AngularFirestore) {}

  ngOnInit() {
    this.afs.collection('blogPost',ref=>ref.where("blogCategory",'==','how-to')).snapshotChanges().subscribe(
      val=> {
        this.postType= val.map(pst=>{
          return {
            id:pst.payload.doc.id,
            blogAuthor:pst.payload.doc.data()['blogAuthor'],
            blogCategory:pst.payload.doc.data()['blogCategory'],
            blogContent:pst.payload.doc.data()['blogContent'],
            blogImageLink:pst.payload.doc.data()['blogImageLink'],
            blogTitle:pst.payload.doc.data()['blogTitle'],
            postURL:pst.payload.doc.data()['postURL'],
            published:pst.payload.doc.data()['published']
          }
        })
      }
    )
  }

}
