import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class ButtonComponent {
  @Input()
  appearance: 'solid' | 'stroked' = 'solid';

  @Input()
  color: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  protected get computedHostClasses() {
    return {
      [`df-${[this.appearance]}`]: true,
      [`df-${[this.color]}`]: true,
    };
  }

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @HostBinding('attr.disabled')
  protected get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;
  }

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
}
