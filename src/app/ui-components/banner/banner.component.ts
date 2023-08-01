import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CanAppearanceDirective } from 'src/app/directives/can-appearance.directive';
import { CanColorDirective } from 'src/app/directives/can-color.directive';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <h5>Notification:</h5>
    <div class="banner-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CanColorDirective,
      inputs: ['color']
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance']
    }
  ]
})
export class BannerComponent {}
