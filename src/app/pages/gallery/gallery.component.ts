import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  autore: any[] = [
    {
      nome: 'Måneskin',
      titolo: 'The Loneliest',
      foto: 'https://media-assets.vanityfair.it/photos/63340fbd9406155537f84673/1:1/w_2048,h_2048,c_limit/image2.jpg',
      frameSrc:
        'https://open.spotify.com/embed/track/7exHT4swWOKL5addPeqkLP?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',

      loading: 'lazy',
    },
    {
      nome: 'League of Legends',
      titolo: 'Legends Never Die',
      foto: '../../../assets/img/song/legend.jpg',
      frameSrc:
        'https://open.spotify.com/embed/track/1FpVJ7HpZInE2GvhVE2TwT?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',
      loading: 'lazy',
    },
    {
      nome: 'Kate Bush',
      titolo: 'Running Up That Hill',
      foto: 'https://i1.sndcdn.com/artworks-o1Xz8h8aCPtzifow-e3Ro6Q-t500x500.jpg',
      frameSrc:
        'https://open.spotify.com/embed/track/1PtQJZVZIdWIYdARpZRDFO?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',
      loading: 'lazy',
    },
    {
      nome: '2Wei, Edda Hayes',
      titolo: 'Survivor',
      foto: 'https://i.scdn.co/image/ab67616d0000b273c0f5a8feea6f9b07380ed997',
      frameSrc:
        'https://open.spotify.com/embed/track/1I3FOzvCxbEqct7KkK4eXr?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',
      loading: 'lazy',
    },
    {
      nome: 'Bishop Briggs',
      titolo: 'White Flag',
      foto: 'https://i.scdn.co/image/ab67616d0000b2738cae5034066af45cdfbc4266',
      frameSrc:
        'https://open.spotify.com/embed/track/2ph6BRhGcUzc2W9wIulG5k?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',
      loading: 'lazy',
    },
    {
      nome: 'Fall Out Boy',
      titolo: 'Centuries',
      foto: 'https://m.media-amazon.com/images/M/MV5BZGI0MWI2OTYtZTZiMC00OThhLWI4MjUtMGFjMTU2N2Q1NDNkL2ltYWdlXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
      frameSrc:
        'https://open.spotify.com/embed/track/04aAxqtGp5pv12UXAg4pkq?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',
      loading: 'lazy',
    },
    {
      nome: 'Måneskin',
      titolo: 'Gossip',
      foto: 'https://www.dire.it/wp-content/uploads/2023/01/MANESKIN-2-1024x679.jpg',
      frameSrc:
        'https://open.spotify.com/embed/track/44Xyja7xYPlVC6v2CeweSi?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',
      loading: 'lazy',
    },
    {
      nome: 'The Score',
      titolo: 'Born For This',
      foto: 'https://mp3semticdn.com/mp3_images/The-Score-Born-For-This-2020-10.jpg',
      frameSrc:
        'https://open.spotify.com/embed/track/5Sco7mbJy7p7vdDtJW10fZ?utm_source=generator',
      frameStyle: 'border-radius:12px',
      frameWidth: '100%',
      frameHeight: 'auto',
      frameborder: '0',
      loading: 'lazy',
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
