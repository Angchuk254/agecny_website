import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy  {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  blogs: any[] = [];
  private intervalId: any;

  constructor(private blogService: BlogService) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.startInfiniteSlide();
    }, 2000); // Initial delay before first move
  }

  startInfiniteSlide(): void {
    const carouselElement = this.carousel.nativeElement;
    const scrollStep = carouselElement.clientWidth / 3; // Move 1 blog card at a time
    const delayBetweenSlides = 2000; // Pause duration before sliding

    this.intervalId = setInterval(() => {
      carouselElement.scrollBy({ left: scrollStep, behavior: 'smooth' });

      setTimeout(() => {
        const firstItem = carouselElement.firstElementChild as HTMLElement;

        if (carouselElement.scrollLeft >= firstItem.offsetWidth) {
          this.moveFirstToLast();
          carouselElement.scrollLeft -= firstItem.offsetWidth; // Prevent jump
        }
      }, 700); // Allow scrolling to complete before moving elements
    }, delayBetweenSlides + 1000); // Delay before next slide
  }

  moveFirstToLast(): void {
    if (this.blogs.length > 0) {
      const firstItem = this.blogs.shift(); // Remove first item
      if (firstItem) {
        this.blogs.push(firstItem); // Add it to the end
      }
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
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