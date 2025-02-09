import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-packages',
  imports: [RouterLink,CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  packages = [
    { id: 1, name: 'Pangong Lake', image: '/assets/pexels-shashank-960219.jpg', description: 'A stunning high-altitude lake.' },
    { id: 2, name: 'Nubra Valley', image: '/assets/pexels-janamparikh-17033866.jpg', description: 'Famous for sand dunes and monasteries.' },
    { id: 3, name: 'Sham Valley', image: '/assets/pexels-estudiodelarts-10841375.jpg', description: ` It's a popular destination for travelers looking for adventure and peace. `},
    { id: 4, name: 'Bike Tour', image: '/assets/pexels-gauravdeswal99-17365233.jpg', description: 'Ladakh advantarous bike trip.' },
    { id: 5, name: 'Camping in Ladakh', image: '/assets/pexels-gauravdeswal99-17365233.jpg', description: 'Experience camping under the starry sky.' },
    { id: 5, name: 'Rafting Adventure', image: '/assets/pexels-gauravdeswal99-17365233.jpg', description: 'Enjoy thrilling rafting experiences in Ladakh.' },
    // { id: 5, name: 'Leh Palace', image: '/assets/pexels-julia-volk-6576294.jpg', description: 'Historic royal palace of Leh.' },
  ];
  constructor(){
    window.scrollTo(0,0)
  }
}
