import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '@lbk/shared/models';

export function slideInTop(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delay, duration, timing } = option;
  return trigger(name || 'slideIn', [
    state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
    transition(':enter', [animate('{{duration}}ms {{delay}}ms {{timing}}')], {
      params: { delay, timing, duration },
    }),
  ]);
}
