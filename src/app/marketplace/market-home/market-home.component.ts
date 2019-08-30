import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { Item } from '../item';
import { ProductViewService } from 'src/app/product-view.service';
import { SeoService } from 'src/app/seo.service';
import { Title } from '@angular/platform-browser';
import { PaginationMarketService } from '../pagination-market.service';

@Component({
  selector: 'app-market-home',
  templateUrl: './market-home.component.html',
  styleUrls: ['./market-home.component.css']
})
export class MarketHomeComponent implements OnInit {
  title = 'Marketplace | Amazing Price';

  items:Observable<Item[]>
  constructor(private _ProductService:ProductViewService,private seo:SeoService, private titleService:Title
    ,public page:PaginationMarketService) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.seo.generateTags({
      title: this.title,
      description: 'Amazon Top Offers, Grab This Offer Now at Low Price, Its Amazing Deal',
      image: 'https://my-portfolio-4ff3c.web.app/assets/icons/favicon.ico',
  });
    // this.items = this._ProductService.getAllProduct(); 

    this.page.init('amazon_products','pro_URL',{reverse:true,prepend:false});
  }

  scrollHandler(e){
    if(e === 'bottom'){
      this.page.more()
    }
  }

}
