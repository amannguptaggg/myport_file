import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';
import { MarketHomeComponent } from './market-home/market-home.component';
import { CatOneComponent } from './cat-one/cat-one.component';
import { CatTwoComponent } from './cat-two/cat-two.component';
import { CatThreeComponent } from './cat-three/cat-three.component';
import { CatFourComponent } from './cat-four/cat-four.component';


const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent,
    pathMatch:'prefix',
    children:[
      {
        path: '',
        component:MarketHomeComponent
      },
      {
        path: 'Fashion',
        component:CatOneComponent
      },
      {
        path: 'Electronics',
        component: CatTwoComponent
      },
      {
        path: 'Health-Care',
        component: CatThreeComponent
      },
      {
        path: 'Special-offers',
        component: CatFourComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
