import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
declare var bootstrap: any; 
@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  galleryImages = [
    { title: 'Diskit Monestary', src: '/assets/pexels-janamparikh-17033866.jpg' },
    { title: 'Samgam Point', src: '/assets/pexels-julia-volk-5202118.jpg' },
    { title: 'Changthang', src: '/assets/pexels-julia-volk-5204433.jpg' },
    { title: 'Sham Valley', src: '/assets/pexels-estudiodelarts-10841375.jpg' },
    { title: 'Tsomo riri', src: '/assets/pexels-avinashpatel-688576.jpg' },
    { title: 'Zanskar Range', src: '/assets/pexels-julia-volk-5202070.jpg' }
  ];

  selectedImage: { title: string, src: string } | null = null;

  // Function to open the modal with the clicked image
  openModal(image: { title: string, src: string }) {
    this.selectedImage = image;
    // Trigger the modal open
    const modal = new bootstrap.Modal(document.getElementById('galleryModal')!);
    modal.show();
  }
  constructor(){
    window.scrollTo(0,0)
  }
}
