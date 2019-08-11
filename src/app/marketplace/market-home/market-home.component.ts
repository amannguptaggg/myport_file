import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { Item } from '../item';
import { ProductViewService } from 'src/app/product-view.service';

@Component({
  selector: 'app-market-home',
  templateUrl: './market-home.component.html',
  styleUrls: ['./market-home.component.css']
})
export class MarketHomeComponent implements OnInit {
  items:Observable<Item[]>
  constructor(private _ProductService:ProductViewService) { }

  ngOnInit() {
    this.items = this._ProductService.getAllProduct(); 
  }

}
