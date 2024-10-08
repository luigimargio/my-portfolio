import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div [@routeAnimation]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        // Imposta gli stili di base per gli elementi in entrata e in uscita
        query(
          ':enter, :leave',
          [
            style({
              position: 'fixed',
              width: '100%',
            }),
          ],
          { optional: true }
        ),
        group([
          // Animazione per l'elemento in uscita (fade out)
          query(
            ':leave',
            [
              animate(
                '0.5s ease',
                style({
                  opacity: 0,
                })
              ),
            ],
            { optional: true }
          ),
          // Animazione per l'elemento in entrata (fade in)
          query(
            ':enter',
            [
              style({
                opacity: 0,
              }),
              animate(
                '0.5s ease',
                style({
                  opacity: 1,
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ]  
})
export class AppComponent {
  title = 'my-portfolio';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
