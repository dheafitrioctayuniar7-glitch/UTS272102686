import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {

  photos = [
    {
      name: 'Old town at dusk',
      size: '4.2 MB',
      resolution: '3840×2160',
      image: 'assets/img/photo1.png'
    },
    {
      name: 'Garden view',
      size: '1.1 MB',
      resolution: '1600×1600',
      image: 'assets/img/photo2.png'
    },
    {
      name: 'Reading by lamplight',
      size: '3.8 MB',
      resolution: '3200×2133',
      image: 'assets/img/photo3.jpg'
    },
    {
      name: 'Product shot',
      size: '980 KB',
      resolution: '1600×1600',
      image: 'assets/img/photo4.jpg'
    },
    {
      name: 'Dining area, morning',
      size: '2.6 MB',
      resolution: '2560×1707',
      image: 'assets/img/prod-1.jpg'
    },
    {
      name: 'Trail boot, outsole',
      size: '1.4 MB',
      resolution: '1600×1600',
      image: 'assets/img/prod-2.jpg'
    }
  ];

}
