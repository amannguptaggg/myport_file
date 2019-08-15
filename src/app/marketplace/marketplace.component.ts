import {Component,OnInit} from '@angular/core';

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.component.html',
    styleUrls: ['./marketplace.component.css']
})

export class MarketplaceComponent implements OnInit{
    
    constructor(){}
 
    ngOnInit(){
       
    }

    ToggleNavBar () {
        let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
        if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
            element.click();
        }
    }
}