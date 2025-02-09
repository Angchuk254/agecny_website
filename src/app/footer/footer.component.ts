import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openGoogleMaps() {
    window.open('https://maps.app.goo.gl/kT3UWmG5srNDpBwSA', '_blank');
  }
}
