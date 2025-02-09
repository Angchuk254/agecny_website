import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form handling

@Component({
  selector: 'app-contact',
  standalone: true, // Specify the component as standalone
  imports: [CommonModule, FormsModule], // Import necessary modules directly
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  // Submit the form
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      alert(`Thank you for contacting us, ${this.contact.name}. We will get back to you soon!`);
      this.contact = { name: '', email: '', message: '' }; // Reset form after submit
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
  constructor(){
    window.scrollTo(0,0)
  }
}
