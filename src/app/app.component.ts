import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  /*animations: [
    trigger('routeAnimations', [
      transition('bienvenidoLogin <=> auth', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', [
          animate('600ms ease', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('600ms ease', style({ left: '0%' }))
        ])
      ])
    ]),
    trigger('routeAnimations', [
      transition('auth <=> bienvenido', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', [
          animate('600ms ease', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('600ms ease', style({ left: '0%' }))
        ])
      ])
    ])
  ]*/
    animations: [
      trigger('routeAnimations', [
        // Transición de desplazamiento de abajo / arriba
        transition('bienvenidoLogin <=> login', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({ position: 'absolute', width: '100%' })
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateY(100%)', opacity: 0 })
          ], { optional: true }),
          group([
            query(':leave', [
              animate('300ms ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
              animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
            ], { optional: true })
          ])
        ]),

        transition('login <=> bienvenido', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({ position: 'absolute', width: '100%' })
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateY(100%)', opacity: 0 })
          ], { optional: true }),
          group([
            query(':leave', [
              animate('300ms ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
              animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
            ], { optional: true })
          ])
        ]),
  
        // Nueva transición: Escalado y desvanecimiento entre otras rutas
        transition('bievenido<=>bienvenidoLogin1', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({ position: 'absolute', width: '100%' })
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'scale(0.8)', opacity: 0 })
          ], { optional: true }),
          group([
            query(':leave', [
              animate('900ms ease-out', style({ transform: 'scale(1.2)', opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
              animate('900ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
            ], { optional: true })
          ])
        ]),
        
        transition('bienvenido <=> perfil', [
          style({ position: 'relative' }),
            query(':enter, :leave', [
              style({ position: 'absolute', width: '100%' })
            ], { optional: true }),
            query(':enter', [
              style({ transform: 'translateX(100%)', opacity: 0 })
            ], { optional: true }),
            group([
              query(':leave', [
                animate('300ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
              ], { optional: true }),
              query(':enter', [
                animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
              ], { optional: true })
          ])
        ])
      ])
    ]
})

export class AppComponent {
  title = 'clinica';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}