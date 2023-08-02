import { Directive, HostBinding, Input } from '@angular/core';
import { CanPreventDefaultDirective } from './can-prevent-default.directive';

@Directive({
  selector: '[canDisable]',
  standalone: true,
  hostDirectives: [{
    directive: CanPreventDefaultDirective,
    inputs: ['disabled']
  }]
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
