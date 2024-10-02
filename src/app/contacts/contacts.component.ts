import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { GoogleMapsModule } from "@angular/google-maps";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NzCardComponent, GoogleMapsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.less'
})
export class ContactsComponent {

  environment: any;
  
  constructor() {
    this.environment = environment;
  }
}
