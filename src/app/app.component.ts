import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavigationEnd, Router } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

declare function gtag(...args: any): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Aryan Ladakh Bike Rentals';

  constructor(private router: Router) {}
  isLoading=true;
  ngOnInit(): void {
    this.isLoading=true;
    // Reset scroll position on navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        gtag('config', 'G-XXXXXXXXXX', { 'page_path': event.urlAfterRedirects });
        this.isLoading=false;
      }
    });
    setTimeout(() => {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000); // hide loader after 3 seconds
    }, 1000); // simulate delay before showing loader
  }
  }

