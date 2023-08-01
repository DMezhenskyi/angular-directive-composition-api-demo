import { Component } from '@angular/core';
import { ButtonComponent } from './ui-components/button/button.component';
import { BannerComponent } from './ui-components/banner/banner.component';
import { ChipComponent } from './ui-components/chip/chip.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    BannerComponent,
    ChipComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
