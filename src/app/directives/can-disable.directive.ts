import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { CanPreventDefaultDirective } from './can-prevent-default.directive';

@Directive({
  selector: '[canDisable]',
  standalone: true,
  hostDirectives: [CanPreventDefaultDirective]
})
export class CanDisableDirective {
  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @HostBinding('attr.disabled')
  protected get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;
  }

}
