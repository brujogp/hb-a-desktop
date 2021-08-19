import {animate, state, style, transition, trigger} from '@angular/animations';

export const animationShowHiddenPane = trigger('showHiddenPane', [
  state('false', style({
    bottom: '-100%',
    opacity: 0
  })),
  state('true', style({
    bottom: '0',
    opacity: 1
  })),
  transition('* => true', animate('.5s ease', style({
      bottom: '0',
      opacity: 1
    }))
  ),
  transition('* => false', animate('.5s ease', style({
    bottom: '-100%'
  })))
]);

export const animationShowHiddenPaneSubsection = trigger('showHiddenPane', [
  state('false', style({
    bottom: '-100%',
    opacity: 0
  })),
  state('true', style({
    bottom: '0',
    opacity: 1
  })),
  transition('* => true', animate('.5s ease', style({
      bottom: '0',
      opacity: 1
    }))
  ),
  transition('* => false', animate('.5s ease', style({
    opacity: 0,
    bottom: '-100%'
  })))
]);

export const animationShowHiddenPaneDescriptionNode = trigger('showHiddenPane', [
  state('false', style({
    bottom: '-100%',
    opacity: 0
  })),
  state('true', style({
    bottom: '0',
    opacity: 1
  })),
  transition('* => true', animate('.5s ease', style({
      bottom: '0',
      opacity: 1
    }))
  ),
  transition('* => false', animate('.5s ease', style({
    opacity: 0,
    bottom: '-100%'
  })))
]);
