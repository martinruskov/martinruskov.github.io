import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzLayoutModule, SocialsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

}
