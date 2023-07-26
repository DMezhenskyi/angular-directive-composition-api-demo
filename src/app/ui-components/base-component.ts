import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive()
export class BaseComponent {
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
