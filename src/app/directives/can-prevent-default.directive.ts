import { Directive, HostListener, inject } from '@angular/core';
import { CanDisableDirective } from './can-disable.directive';

@Directive({
  selector: '[appCanPreventDefault]',
  standalone: true
})
export class CanPreventDefaultDirective {

  canDisableDir = inject(CanDisableDirective);

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onClick(e: Event) {
    if (this.canDisableDir.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }

  constructor() { 
    console.trace(this.canDisableDir);
    
  }

}
