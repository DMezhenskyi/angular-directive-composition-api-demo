import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [NgIf],
  template: `
    <span class="chip-text">
      <ng-content></ng-content>
    </span>
    <i (click)="onRemove()" *ngIf="removable" class="chip-remove-icon"></i>
  `,
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {
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

  @Input()
  removable = false;

  @Output()
  removed = new EventEmitter<ChipComponent>();

  onRemove() {
    if (this.removable) {
      this.removed.emit(this);
    }
  }
}
