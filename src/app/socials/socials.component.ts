import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.less'
})
export class SocialsComponent {

  environment: any;
  
  constructor() {
    this.environment = environment;
  }
}
