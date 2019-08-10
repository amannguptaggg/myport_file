import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/operator/filter';
import {AngularFirestore} from '@angular/fire/firestore';
import { ProductViewService } from '../../product-view.service';
import 'rxjs-compat/add/operator/map';
import {switchMap} from 'rxjs-compat/operators/switchMap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';



@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css']
})
export class PostFilterComponent implements OnInit {
  postType:any;
  public fPost:any;

  constructor(private router:Router,public activateRouter:ActivatedRoute,
    private service:ProductViewService,private afs:AngularFirestore) { }

  ngOnInit() {
    //  this.activateRouter.queryParamMap.pipe(switchMap(params=>
    //      this.postType = params.get('postType')
    //       ));

        //  this.afs.collection('blogPost',ref=>ref.where("blogCategory",'==','new-tech')).valueChanges().subscribe(
        //   val=> {
        //     this.fPost=val;
        //     console.log(val)
        //   }
        // )

        console.log(this.postType);
        this.afs.collection('blogPost',ref=>ref.where("blogCategory",'==','New-Tech')).snapshotChanges().subscribe(
            val=> {
              this.fPost= val.map(pst=>{
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
              console.log(this.fPost);
            }
          )
   }
}
