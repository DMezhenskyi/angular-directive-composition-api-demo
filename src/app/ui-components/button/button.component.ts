import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  standalone: true,
  template: `
    <span class="button-label">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
