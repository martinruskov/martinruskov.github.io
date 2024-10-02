import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NzCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {

}
