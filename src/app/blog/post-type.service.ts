import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostTypeService {
private _postTypeSource = new Subject<string>();

postType$ = this._postTypeSource.asObservable();

  constructor() { }

  sendpostType(postCat:string){
    this._postTypeSource.next(postCat);
  }
}
