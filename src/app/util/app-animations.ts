import { trigger, transition, animate, style } from '@angular/animations';

export let fadeinTrigger = trigger('fadein', [
  transition(':enter', [
    style({opacity: 0}),
    animate(2000, style({opacity: 1}))
  ])
]);
