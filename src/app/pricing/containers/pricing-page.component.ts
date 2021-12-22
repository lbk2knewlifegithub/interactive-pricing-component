import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-pricing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <!-- bg pattern -->
      <img
        class="fixed top-0 left-0 w-full h-1/2 z-[-1]"
        src="/assets/images/bg-pattern.svg"
        alt="Bg pattern"
      />
      <!-- end bg pattern -->

      <lbk-navbar></lbk-navbar>

      <main class="container mt-20">
        <lbk-pricing></lbk-pricing>
      </main>
    </div>
  `,
})
export class PricingPageComponent {}
