import {Component,OnInit} from '@angular/core';

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.component.html',
    styleUrls: ['./marketplace.component.css']
})

export class MarketplaceComponent implements OnInit{
    
    constructor(){}
 
    ngOnInit(){
       
        $(document).ready(function () {
            $(document).click(
                function (event) {
                    var target = $(event.target);
                    var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
                    if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
                        $("button.navbar-toggler").click();
                    }
                }
            );
        })
    }

    ToggleNavBar () {
        let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
        if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
            element.click();
        }
    }
}