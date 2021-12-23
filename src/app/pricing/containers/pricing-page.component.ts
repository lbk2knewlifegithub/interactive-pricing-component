import { ChangeDetectionStrategy, Component } from '@angular/core';
import { scaleIn } from '@lbk/shared/animations';
import { slideInTop } from '@lbk/shared/animations/slide.anim';

@Component({
  selector: 'lbk-pricing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative lg:h-screen">
      <!-- bg pattern -->
      <img
        class="fixed top-0 left-0 w-full h-1/2 z-[-1]"
        src="/assets/images/bg-pattern.svg"
        alt="Bg pattern"
      />
      <!-- end bg pattern -->


      <div class="container mt-16 md:mt-32">
        <lbk-navbar class="block" @slideIn></lbk-navbar>
      </div>

      <main class="container max-w-2xl mt-16 md:mt-24">
        <lbk-pricing class="block" @scaleIn></lbk-pricing>
      </main>
    </div>
  `,
  animations: [
    scaleIn(),
    slideInTop({delay: 400}),
  ],
})
export class PricingPageComponent {}
