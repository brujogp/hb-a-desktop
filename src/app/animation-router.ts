import {animate, group, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const routerTransitionAnimation = trigger('triggerName', [
  transition('root <=> project, root <=> supportus, root <=> us, root <=> any', [
    group([
      query(':leave', [
        style({display: 'none'}),
      ]),
      query(':enter', [
        group([
          style({opacity: 0}),
          group([
            animate(200, style({opacity: 1}))
          ])
        ])
      ])
    ])
  ])
]);
