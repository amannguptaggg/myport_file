import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs-compat';
import {Observable} from 'rxjs-compat';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/scan';
import 'rxjs-compat/add/operator/take';

interface QueryConfig{
  path:string;
  field:string;
  limit?:number;
  reverse?:boolean;
  prepend?:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PaginationMarketService {

  //source data
  private _done = new BehaviorSubject(false);
  private _loading= new BehaviorSubject(false);
  private _data = new BehaviorSubject([]);

  private query: QueryConfig;
  data: Observable<any>; 
  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();


  constructor(private afs:AngularFirestore) { }

  init(path, field, opts?){
    this.query = {
      path,
      field,
      limit:6,
      reverse: false,
      prepend: false,
      ...opts
    }

    const first = this.afs.collection(this.query.path, ref=>{
      return ref
           .orderBy(this.query.field,this.query.reverse ? 'desc':'asc')
           .limit(this.query.limit)
    })

    this.mapAndUpdate(first)

    // create observable  array for consumption in component

    this.data = this._data.asObservable()
     .scan( (acc,val)=>{
       return this.query.prepend ?val.concat(acc):acc.concat(val)
     })

  }

 private mapAndUpdate(col:AngularFirestoreCollection<any>){
   if(this._done.value || this._loading.value) {
     return 
   };
  //  loading
  this._loading.next(true)
  return col.snapshotChanges()
  .do(arr=>{
    let values = arr.map(snap=>{
      const data = snap.payload.doc.data();
      const id = snap.payload.doc.id;
      const doc = snap.payload.doc;
      return {...data,id,doc}
    })

          // if prepend ,reverse order
          values = this.query.prepend ? values.reverse() : values
         this._data.next(values);
         this._loading.next(false);
   
         // no more value mark down 
         if(!values.length){
           this._done.next(true);
         }

  }).take(1).subscribe();
 }

 private getCursor(){
  const current = this._data.value;
  if(current.length){
    return this.query.prepend? current[0].doc: current[current.length -1].doc
  } 
  return null
 }

 more(){
   const cursor = this.getCursor();
   const more = this.afs.collection(this.query.path, ref=>{
     return ref
     .orderBy(this.query.field,this.query.reverse ? 'desc':'asc')
           .limit(this.query.limit)
           .startAfter(cursor)
   })

   this.mapAndUpdate(more)
 }

}
