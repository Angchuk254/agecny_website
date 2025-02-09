import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-packages-detail',
  imports: [RouterLink, CommonModule],
  templateUrl: './packages-detail.component.html',
  styleUrls: ['./packages-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {
  packageId: string | null = null;
  packageDetails: any; // This will hold the details of the selected package
  isPackageNotFound: boolean = false; // Flag to handle package not found error

  // Sample recommended packages
  recommendedPackages = [
    {
      id: '2',
      name: 'Camping in Ladakh',
      description: 'Experience camping under the starry sky.',
      price: '₹10,000',
      image: '/assets/pexels-avinashpatel-688576.jpg'
    },
    {
      id: '3',
      name: 'Rafting Adventure',
      description: 'Enjoy thrilling rafting experiences in Ladakh.',
      price: '₹8,000',
      image: '/assets/pexels-gauravdeswal99-17365233.jpg'
    }
  ];

  constructor(private route: ActivatedRoute,private router: Router) {window.scrollTo(0,0) }

  ngOnInit(): void {
    // Fetch the packageId from the route parameters
    this.route.paramMap.subscribe(params => {
      this.packageId = params.get('id'); // Get the dynamic 'id' parameter
      this.loadPackageDetails();
    });
   
  }
  scrollToTopAndNavigate(packageId: string) {
    // Scroll to top of the page
    window.scrollTo(0, 0);

    // Navigate to the package detail route
    this.router.navigate(['/packages/6']);
  }
  loadPackageDetails() {
    window.scrollBy(0, 0);
    // Simulate fetching data for the package using this.packageId
    const mockPackages = [
      {
        id: '1',
        name: 'Pangong Lake',
        description: 'A stunning high-altitude lake.',
        price: '₹15,000',
        images: [
          '/assets/pexels-avinashpatel-688576.jpg',
          '/assets/pexels-gauravdeswal99-17365233.jpg',
          '/assets/pexels-julia-volk-5201468.jpg'
        ],
        itinerary: [
          { dayNumber: 1, title: 'Arrival in Leh', description: 'Arrive in Leh, acclimatize, and explore the local market.' },
          { dayNumber: 2, title: 'Ride to Pangong Lake', description: 'Enjoy a scenic ride to the beautiful Pangong Lake.' },
          { dayNumber: 3, title: 'Ride to Nubra Valley', description: 'Visit the famous sand dunes and monasteries in Nubra Valley.' },
          { dayNumber: 4, title: 'Return to Leh', description: 'Return to Leh, explore the local markets, and relax.' }
        ]
      },
      {
        id: '2',
        name: 'Nubra Valley',
        description: 'Famous for sand dunes and monasteries.',
        price: '₹15,000',
        images: [
          '/assets/pexels-avinashpatel-688576.jpg',
          '/assets/pexels-gauravdeswal99-17365233.jpg',
          '/assets/pexels-julia-volk-5201468.jpg'
        ],
        itinerary: [
          { dayNumber: 1, title: 'Arrival in Leh', description: 'Arrive in Leh, acclimatize, and explore the local market.' },
          { dayNumber: 2, title: 'Ride to Pangong Lake', description: 'Enjoy a scenic ride to the beautiful Pangong Lake.' },
          { dayNumber: 3, title: 'Ride to Nubra Valley', description: 'Visit the famous sand dunes and monasteries in Nubra Valley.' },
          { dayNumber: 4, title: 'Return to Leh', description: 'Return to Leh, explore the local markets, and relax.' }
        ]
      },
      {
        id: '3',
        name: 'Sham Valley',
        description: `It's a popular destination for travelers looking for adventure and peace.`,
        price: '₹15,000',
        images: [
          '/assets/pexels-avinashpatel-688576.jpg',
          '/assets/pexels-gauravdeswal99-17365233.jpg',
          '/assets/pexels-julia-volk-5201468.jpg'
        ],
        itinerary: [
          { dayNumber: 1, title: 'Arrival in Leh', description: 'Arrive in Leh, acclimatize, and explore the local market.' },
          { dayNumber: 2, title: 'Ride to Pangong Lake', description: 'Enjoy a scenic ride to the beautiful Pangong Lake.' },
          { dayNumber: 3, title: 'Ride to Nubra Valley', description: 'Visit the famous sand dunes and monasteries in Nubra Valley.' },
          { dayNumber: 4, title: 'Return to Leh', description: 'Return to Leh, explore the local markets, and relax.' }
        ]
      },
      {
        id: '4',
        name: 'Bike Tour',
        description: `Ladakh advantarous bike trip.`,
        price: '₹15,000',
        images: [
          '/assets/pexels-avinashpatel-688576.jpg',
          '/assets/pexels-gauravdeswal99-17365233.jpg',
          '/assets/pexels-julia-volk-5201468.jpg'
        ],
        itinerary: [
          { dayNumber: 1, title: 'Arrival in Leh', description: 'Arrive in Leh, acclimatize, and explore the local market.' },
          { dayNumber: 2, title: 'Ride to Pangong Lake', description: 'Enjoy a scenic ride to the beautiful Pangong Lake.' },
          { dayNumber: 3, title: 'Ride to Nubra Valley', description: 'Visit the famous sand dunes and monasteries in Nubra Valley.' },
          { dayNumber: 4, title: 'Return to Leh', description: 'Return to Leh, explore the local markets, and relax.' }
        ]
      },
      {
        id: '5',
        name: 'Camping in Ladakh',
        description: `Experience camping under the starry sky.`,
        price: '₹15,000',
        images: [
          '/assets/pexels-avinashpatel-688576.jpg',
          '/assets/pexels-gauravdeswal99-17365233.jpg',
          '/assets/pexels-julia-volk-5201468.jpg'
        ],
        itinerary: [
          { dayNumber: 1, title: 'Arrival in Leh', description: 'Arrive in Leh, acclimatize, and explore the local market.' },
          { dayNumber: 2, title: 'Ride to Pangong Lake', description: 'Enjoy a scenic ride to the beautiful Pangong Lake.' },
          { dayNumber: 3, title: 'Ride to Nubra Valley', description: 'Visit the famous sand dunes and monasteries in Nubra Valley.' },
          { dayNumber: 4, title: 'Return to Leh', description: 'Return to Leh, explore the local markets, and relax.' }
        ]
      },
      {
        id: '6',
        name: 'Rafting Adventure',
        description: `Enjoy thrilling rafting experiences in Ladakh.`,
        price: '₹15,000',
        images: [
          '/assets/pexels-avinashpatel-688576.jpg',
          '/assets/pexels-gauravdeswal99-17365233.jpg',
          '/assets/pexels-julia-volk-5201468.jpg'
        ],
        itinerary: [
          { dayNumber: 1, title: 'Arrival in Leh', description: 'Arrive in Leh, acclimatize, and explore the local market.' },
          { dayNumber: 2, title: 'Ride to Pangong Lake', description: 'Enjoy a scenic ride to the beautiful Pangong Lake.' },
          { dayNumber: 3, title: 'Ride to Nubra Valley', description: 'Visit the famous sand dunes and monasteries in Nubra Valley.' },
          { dayNumber: 4, title: 'Return to Leh', description: 'Return to Leh, explore the local markets, and relax.' }
        ]
      },
      
      
    ];

    // Find the selected package based on ID
    this.packageDetails = mockPackages.find(pkg => pkg.id === this.packageId);
    if (!this.packageDetails) {
      this.isPackageNotFound = true;
      console.error('Package not found');
    }
  }
}
