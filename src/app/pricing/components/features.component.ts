import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="features">
      <li>
        <div>
          <img src="/assets/images/icon-check.svg" alt="Check" />
        </div>
        <p>Unlimited websites</p>
      </li>

      <li>
        <div>
          <img src="/assets/images/icon-check.svg" alt="Check" />
        </div>
        <p>100% data ownership</p>
      </li>

      <li>
        <div>
          <img src="/assets/images/icon-check.svg" alt="Check" />
        </div>
        <p>Email reports</p>
      </li>
    </ul>
  `,
  styles: [
    `
      .features {
        @apply text-muted flex flex-col items-center gap-2 md:items-start md:gap-3;
        li {
          @apply flex gap-4 items-center;
        }
      }
    `,
  ],
})
export class FeaturesComponent {}
