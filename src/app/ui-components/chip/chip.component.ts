import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { BaseComponent } from '../base-component';

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
export class ChipComponent extends BaseComponent {
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
