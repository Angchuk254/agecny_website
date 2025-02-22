import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-trending-details',
  imports: [CommonModule,RouterLink],
  templateUrl: './trending-details.component.html',
  styleUrl: './trending-details.component.scss',
})
export class TrendingDetailsComponent implements OnInit {
  placeName: string = '';
  placeDetails: any;

  // Dummy data for trending places (this could be replaced with API calls)
  trendingPlaces = [
    {
      name: 'The Enigmatic Magnetic Hill of Ladakh: Where Science Meets Mystery',
      image: '/assets/pexels-julia-volk-5204433.jpg',
      description:
        'Nestled in the stark, awe-inspiring landscapes of Ladakh, the Magnetic Hill is a natural wonder that defies conventional perception. Located approximately 30 kilometers from Leh, the capital of Ladakh, at an elevation of around 11,000 feet, this site captivates travelers with its mysterious optical illusion. Here, vehicles seemingly roll uphill on their own, challenging the laws of gravity and sparking curiosity among visitors.',
      subTitle: 'The Phenomenon: A Gravity-Defying Experience',
      subtitlePara:
        'The Magnetic Hill is famously marked by a yellow signboard instructing drivers to stop at a specific point, shift to neutral, and witness their vehicle appear to glide uphill at speeds of up to 20 km/h. This surreal experience, however, is not the work of magnetic forces but a clever trick of nature. The surrounding topography—a blend of barren slopes and the distant Himalayas—creates a gravity hill illusion. The road’s alignment, coupled with the lack of visible horizons, makes a downhill slope appear uphill. When vehicles "roll upward," they are actually moving with gravity on a subtle decline.',
      megaPara: 'Legends and Lore',
      legendPara:"Local folklore enriches the hill’s mystique. One legend claims the hill is a path to heaven, blessed by ancient deities. Another tale speaks of magnetic forces pulling cars upward—a myth debunked by science but still cherished by storytellers. Such narratives highlight the cultural tapestry of Ladakh, where nature and myth intertwine.",
      secinPara:'Science Unveils the Illusion',
      sectionpara:'Geologists and physicists attribute the phenomenon to optical misperception. The region’s uneven terrain and lack of reference points distort visual orientation. The Himalayas and surrounding ridges create a false horizon, tricking the brain into misjudging the slope’s gradient. This explanation, while logical, doesn’t diminish the thrill of experiencing the illusion firsthand.',
      listheading:'Beyond the Hill: Nearby Attractions',
      listPara:'A trip to Magnetic Hill can be paired with visits to other Ladakhi treasures:',
      listStyle:'Sangam Confluence: The meeting point of the Indus and Zanskar rivers, where turquoise and emerald waters collide.',
      listStyle2:'Gurudwara Pathar Sahib: A serene Sikh shrine commemorating Guru Nanak’s visit.',
      listStyle3:'Lamayuru Monastery: Known as “Moonland” for its lunar-like landscape, this ancient Buddhist site offers spiritual solace',
      consclusion:'The Magnetic Hill of Ladakh is more than a quirky roadside attraction—it’s a testament to nature’s ability to bewilder and inspire. Whether you’re a science enthusiast, adventure seeker, or cultural explorer, this site promises an unforgettable encounter with the extraordinary. As you depart, let the hill remind you of Earth’s endless wonders, urging us to explore responsibly and preserve its magic for generations to come.Plan your journey, embrace the mystery, and let Ladakh’s Magnetic Hill challenge your perception of reality. 🚗✨'
    },
    {
      name: 'Tso Moriri: Ladakh’s Hidden Gem of Serenity and Solitude',
      image: '/assets/pexels-nishantvy-5784209.jpg',
      description:
        'Nestled in the remote Changthang Plateau of Ladakh, at a breathtaking altitude of 4,522 meters (14,836 feet), Tso Moriri is a pristine high-altitude lake that embodies tranquility and untouched beauty. Known as the “Mountain Lake of Dreams,” this shimmering oasis, surrounded by rugged mountains and vast grasslands, is a sanctuary for nature lovers, adventurers, and spiritual seekers alike. Designated a Ramsar Wetland Site in 2002, Tso Moriri’s ecological significance and ethereal charm make it one of Ladakh’s most mesmerizing destinations.',
      subtitlePara:
        'Climate change, overgrazing, and unregulated tourism threaten Tso Moriri’s delicate balance. Initiatives like waste management programs and community-led tourism aim to protect this natural wonder. Visitors are urged to tread lightly and support sustainable practices.',
      megaPara: 'Geography and Ecosystem',
      legendPara:"Tso Moriri, stretching 28 kilometers in length and 3–5 kilometers in width, is the largest high-altitude lake entirely within India. Fed by glacial streams and snowmelt, its crystal-clear waters reflect the ever-changing hues of the sky, ranging from turquoise to deep sapphire. The lake lies in the Changthang Cold Desert Wildlife Sanctuary, a region inhabited by the nomadic Changpa tribes, whose hardy lifestyle revolves around rearing pashmina goats and yaks. The lake’s extreme altitude and frigid temperatures (-30°C in winter) create a fragile ecosystem. Its brackish waters support unique microorganisms, while the surrounding wetlands host rare migratory birds like the black-necked crane (Tibet’s sacred bird), bar-headed geese, and brahminy ducks.",
      secinPara:'Cultural and Spiritual Significance',
      sectionpara:'The shores of Tso Moriri are dotted with ancient Buddhist prayer flags and the Korzok Monastery, a 19th-century Tibetan Buddhist gem. Perched near the lake, this monastery is the highest in the world at 4,560 meters and serves as the spiritual heart of the Changpa nomads. Every summer, the Korzok Gustor Festival sees masked dances, rituals, and vibrant celebrations, offering visitors a glimpse into Ladakh’s living cultural heritage.Local legends claim the lake is guarded by divine spirits, and its stillness is said to mirror the mind in meditation. For centuries, pilgrims have circumambulated its shores, seeking blessings and inner peace.',
      listheading:'Wildlife Wonderland',
      listPara:'Tso Moriri’s isolation has preserved its role as a critical habitat for endangered species:',
      listStyle:'Kiang (Tibetan wild ass): Gallop freely across the plains.',
      listStyle2:'Marmots and Himalayan hares: Thrive in the grasslands.',
      listStyle3:'Snow leopards: Occasionally spotted in winter.',
      consclusion:'Tso Moriri is more than a destination—it’s an emotion. Here, silence speaks louder than words, and the vastness of the landscape humbles even the most seasoned traveler. Whether you’re gazing at star-studded skies, photographing golden sunrises over the lake, or sharing stories with Changpa nomads, Tso Moriri offers a rare chance to disconnect from chaos and reconnect with Earth’s raw beauty.As Ladakh’s crown jewel of serenity, it whispers a timeless truth: some places are not just seen but felt with the soul.Plan your pilgrimage to Tso Moriri, but carry back only memories, leaving nothing but reverence in your wake. 🌄✨'
    },
    {
      name: 'Shanti Stupa',
      image: '/assets/pexels-shalenderkumar-6650419.jpg',
      description: 'A peaceful Buddhist stupa with stunning views.',
    },
  ];

  constructor(private route: ActivatedRoute) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    // Subscribe to the route parameters
    this.route.paramMap.subscribe((params) => {
      this.placeName = params.get('place') || ''; // Get the 'place' parameter from the route

      // Check if placeName is found in the trendingPlaces array
      if (this.placeName) {
        this.placeDetails = this.trendingPlaces.find(
          (place) => place.name.toLowerCase() === this.placeName.toLowerCase()
        );
      }
    });
  }
}
