import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NzCardComponent, NzGridModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.less'
})
export class ServicesComponent {

}
