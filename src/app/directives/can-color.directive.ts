import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[canColor]',
  standalone: true,
})
export class CanColorDirective {
  @Input()
  color: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  protected get computedHostClass() {
    return `df-${[this.color]}`;
  }
}
