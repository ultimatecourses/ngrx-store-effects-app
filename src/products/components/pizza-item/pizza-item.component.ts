import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-pizza-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-item.component.scss'],
  template: `
    <div class="pizza-item">
      <a [routerLink]="['/products', pizza.id]">
        <app-pizza-display
          [pizza]="pizza">
        </app-pizza-display>
        <h4>{{ pizza.name }}</h4>
        <button type="button" class="btn btn__ok">
          View Pizza
        </button>
      </a>
    </div>
  `,
})
export class PizzaItemComponent {
  @Input() pizza: any;
}
