import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  autore: any[] = [
    {
      nome: 'Måneskin',
      titolo: 'The Loneliest',
      foto: 'https://media-assets.vanityfair.it/photos/63340fbd9406155537f84673/1:1/w_2048,h_2048,c_limit/image2.jpg',
      frameSrc: 'https://open.spotify.com/embed/track/7exHT4swWOKL5addPeqkLP?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: '352',
      frameborder: '0',
      allow:'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
      loading: 'lazy'
    },
    {
      nome: 'Måneskin',
      titolo: 'The Loneliest',
      foto: 'https://media-assets.vanityfair.it/photos/63340fbd9406155537f84673/1:1/w_2048,h_2048,c_limit/image2.jpg',
      frameSrc: 'https://open.spotify.com/embed/track/7exHT4swWOKL5addPeqkLP?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: '352',
      frameborder: '0',
      allow:'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
      loading: 'lazy'
    }
  ]
}
