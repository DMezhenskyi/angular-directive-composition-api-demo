import { Component } from '@angular/core';
import { ButtonComponent } from './ui-components/button/button.component';
import { BannerComponent } from './ui-components/banner/banner.component';
import { ChipComponent } from './ui-components/chip/chip.component';
import { CanDisableDirective } from './directives/can-disable.directive';
import { CanColorDirective } from './directives/can-color.directive';
import { CanAppearanceDirective } from './directives/can-appearance.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    BannerComponent,
    ChipComponent,
    CanDisableDirective,
    CanColorDirective,
    CanAppearanceDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
