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
  state$:Observable<object>;

  constructor(private router:Router,public activateRouter:ActivatedRoute,
    private service:ProductViewService,private afs:AngularFirestore) { }

  ngOnInit() {
    this.postType = localStorage.getItem('postType');
    console.log(this.postType);
   }
}
