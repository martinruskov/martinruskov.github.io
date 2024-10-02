import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';
import { NzMenuItemComponent, NzMenuModule } from 'ng-zorro-antd/menu';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SocialsComponent } from './socials/socials.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NzContentComponent,
    NzFooterComponent,
    NzBreadCrumbItemComponent,
    NzHeaderComponent,
    NzBreadCrumbComponent,
    NzLayoutComponent,
    NzQRCodeModule,
    NzCardComponent,
    NzDividerComponent,
    NzMenuModule,
    TestimonialComponent,
    SocialsComponent,
    ServicesComponent,
    AboutComponent,
    MainComponent,
    ContactsComponent,
    NzGridModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Martin Ruskov';
}
