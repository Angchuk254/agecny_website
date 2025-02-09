import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(){
    window.scrollTo(0,0)
  }
  destinations = [
    { id: 1, name: 'Pangong Lake', image: '/assets/pexels-shashank-960219.jpg', description: 'A stunning high-altitude lake.' },
    { id: 2, name: 'Nubra Valley', image: '/assets/pexels-janamparikh-17033866.jpg', description: 'Famous for sand dunes and monasteries.' },
    { id: 3, name: 'Sham Valley', image: '/assets/pexels-estudiodelarts-10841375.jpg', description: ` It's a popular destination for travelers looking for adventure and peace. `},
    { id: 4, name: 'Bike Tour', image: '/assets/pexels-gauravdeswal99-17365233.jpg', description: 'Ladakh advantarous bike trip.' },
    { id: 5, name: 'Leh Palace', image: '/assets/pexels-julia-volk-6576294.jpg', description: 'Historic royal palace of Leh.' },
    { id: 5, name: 'Explore More', image: '/assets/pexels-julia-volk-5202118.jpg', description: 'Explore more excting and advantarous packages.' }
  ];

  trendingPlaces = [
    { name: 'The Enigmatic Magnetic Hill of Ladakh: Where Science Meets Mystery', image: '/assets/pexels-julia-volk-5204433.jpg', description: 'A unique place where cars defy gravity.' },
    { name: 'Tso Moriri: Ladakh’s Hidden Gem of Serenity and Solitude', image: '/assets/pexels-nishantvy-5784209.jpg', description: 'A breathtaking high-altitude lake.' },
    { name: 'Shanti Stupa', image: '/assets/pexels-shalenderkumar-6650419.jpg', description: 'A peaceful Buddhist stupa with stunning views.' }
  ];

}
