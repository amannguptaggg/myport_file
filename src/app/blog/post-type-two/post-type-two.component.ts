import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-post-type-two',
  templateUrl: './post-type-two.component.html',
  styleUrls: ['../blog-home/blog-home.component.css']
})
export class PostTypeTwoComponent implements OnInit {
  public postType:any;
  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('blogPost',ref=>ref.where("blogCategory",'==','Digital-Marketing')).snapshotChanges().subscribe(
      val=> {
        this.postType= val.map(pst=>{
          return {
            id:pst.payload.doc.id,
            blogAuthor:pst.payload.doc.data()['blogAuthor'],
            blogCategory:pst.payload.doc.data()['blogCategory'],
            blogContent:pst.payload.doc.data()['blogContent'],
            blogImageLink:pst.payload.doc.data()['blogImageLink'],
            blogTitle:pst.payload.doc.data()['blogTitle'],
            published:pst.payload.doc.data()['published']
          }
        })
      }
    )
  }
  

}
