import {Component,OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

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
}