import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="relative">
      <div class="text-center space-y-2">
        <h1 class="font-black text-2xl sm:text-3xl md:text-4xl">Simple, traffic-based pricing</h1>

        <p class="text-muted sm:text-lg">
          Sign-up for our 30-day trial<br class="md:hidden" />. No credit card required.
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
