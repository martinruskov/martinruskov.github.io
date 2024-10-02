import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NzCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent {

}
