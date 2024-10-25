import { Component } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.less'
})
export class ContactsComponent {

  environment: any;
  
  constructor() {
    this.environment = environment;
  }
}
