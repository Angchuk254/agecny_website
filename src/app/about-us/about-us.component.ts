import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit{
  teamMembers = [
    { name: 'Thinlas', role: 'Founder', image: '/assets/thinals.jpeg', description: 'Founder of the agency, passionate about travel and adventure.' },
    { name: 'Sinagy', role: 'Tour Specialist', image: '/assets/singay.jpeg', description: 'Expert in curating personalized travel experiences.' },
    // { name: 'James Brown', role: 'Marketing Head', image: '/assets/team3.jpg', description: 'Creative mind behind our branding and campaigns.' }
  ];
  constructor() {
    window.scrollTo(0,0)
   }

  ngOnInit(): void {
  }
}
