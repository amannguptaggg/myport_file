import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketHomeComponent } from './market-home/market-home.component';
import { ProductViewService } from '../product-view.service';
import { MarketplaceComponent } from './marketplace.component';
import { CatOneComponent } from './cat-one/cat-one.component';
import { CatTwoComponent } from './cat-two/cat-two.component';
import { CatThreeComponent } from './cat-three/cat-three.component';
import { CatFourComponent } from './cat-four/cat-four.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [MarketHomeComponent,MarketplaceComponent, CatOneComponent, CatTwoComponent, CatThreeComponent, CatFourComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ],
  providers:[ProductViewService]
})

export class MarketplaceModule { constructor(){console.log('market module is loaded')}} 
