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
  isPackageNotFound: string=''// Flag to handle package not found error

  // Sample recommended packages
  recommendedPackages = [
    {
      id: 'Camping-in-Ladakh',
      name: 'Camping in Ladakh',
      description: 'Experience camping under the starry sky.',
      price: '₹10,000',
      image: '/assets/pexels-avinashpatel-688576.jpg',
      url:'4'
    },
    {
      id: 'Rafting-Adventure',
      name: 'Rafting Adventure',
      description: 'Enjoy thrilling rafting experiences in Ladakh.',
      price: '₹8,000',
      image: '/assets/pexels-gauravdeswal99-17365233.jpg',
        url:'3'
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
  scrollToTopAndNavigate(packageUrl: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    this.router.navigate(['/packages', packageUrl]);  // Navigate using package URL
  }
  
  loadPackageDetails() {
    window.scrollBy(0, 0);
    // Simulate fetching data for the package using this.packageId
    const mockPackages = [
      {
        id: 'Pangong-Lake',
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
        id: 'Nubra-Valley',
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
        id: 'Sham-Valley',
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
        id: 'Bike-Tour',
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
        id: 'Camping-in-Ladakh',
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
        id: 'Rafting-Adventure',
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
      this.isPackageNotFound = 'true';
      console.error('Package not found');
    }
  }
  shareContent() {
    const shareData = {
      title: 'Check this out!',
      text: 'Explore Ladakh with the Best Ladakh Aryan Tours & Travels',
      url: window.location.href,
    };
  
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for unsupported browsers
      const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
      window.open(shareUrl, '_blank');
    }
  }
}
