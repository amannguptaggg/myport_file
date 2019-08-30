import { Injectable } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SeoService {

  constructor(private meta:Meta) { }
   

  generateTags(config){
    config = {
      title: 'Anuglar Web Developer',
      description: 'Aman Gupta Angular Developer Portfolio & Blog',
      image: 'https://my-portfolio-4ff3c.web.app/assets/icons/favicon.ico',
      keywords:'aman-g.com , angular developer, angular material, firebase, firebase login , aman-g.com/blog',
      slug: '',
      ...config
    }

    
    this.meta.updateTag({ name: 'twitter:card', content: 'Angular Web Developer || Portfolio, Blog, Marketplace' });
    this.meta.updateTag({ name: 'twitter:site', content: '@aman-g.com' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });
    this.meta.updateTag({ name: 'twitter:keywords', content:config.keywords});

    this.meta.updateTag({ property: 'og:type', content: 'Angular Web Developer' });
    this.meta.updateTag({ property: 'og:site_name', content: 'aman-g.com' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:keywords', content: config.keywords})
    this.meta.updateTag({ property: 'og:url', content: `https://aman-g.com/${config.slug}` });


    this.meta.updateTag({ name: 'site', content: '@aman-g.com' });
    this.meta.updateTag({ name: 'title', content: config.title });
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'image', content: config.image });
    this.meta.updateTag({ name: 'keywords', content:config.keywords});
  }
}
