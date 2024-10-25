import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

  environment: any;
  burgerMenuActive: boolean = false;
  
  constructor() {
    this.environment = environment;
  }

  toggleBurgerMenu() {
    this.burgerMenuActive = !this.burgerMenuActive;
  }
}
