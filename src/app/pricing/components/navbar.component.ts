import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="relative container mt-10">
      <div class="text-center space-y-2">
        <h1 class="font-black text-2xl">Simple, traffic-based pricing</h1>

        <p class="text-muted">
          Sign-up for our 30-day trial<br />. No credit card required.
        </p>
      </div>

      <img
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        src="/assets/images/pattern-circles.svg"
        alt="Pattern"
      />
    </nav>
  `,
})
export class NavbarComponent {}
