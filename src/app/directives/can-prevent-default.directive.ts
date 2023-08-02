import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCanPreventDefault]',
  standalone: true
})
export class CanPreventDefaultDirective {
  @Input()
  disabled = false;

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
}
