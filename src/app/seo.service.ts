import { Injectable } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SeoService {

  constructor(private meta:Meta) { }
   

  generateTags(config){
    config = {
      title: 'Something',
      description: 'Aman Gupta Angular Developer Portfolio',
      image: 'https://my-portfolio-4ff3c.web.app/assets/icons/favicon.ico',
      slug: '',
      ...config
    }

    
    this.meta.updateTag({ name: 'twitter:card', content: 'Aman Gupta Angular Web Developer , portfolio , blog' });
    this.meta.updateTag({ name: 'twitter:site', content: '@amanng.com' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'blog' });
    this.meta.updateTag({ property: 'og:site_name', content: 'AmannG.com' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://instafire-app.firebaseapp.com/${config.slug}` });

  }
}
