import { Component, OnInit } from '@angular/core';
import { animation, animate, trigger, state, style, transition, keyframes  } from '@angular/animations';

@Component({
  selector: 'home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:
  [
    // the fade-in/fade-out animation.
    trigger('clearOpaque', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('opaque', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class HomeComponent implements OnInit {
  start: boolean = false
  stringInterpolation: string = "Sarah Broat"
  hideCursorOnComplete: boolean = true

  ngOnInit () {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => this.start = true, 1000)
  }
  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    // ...
  }

  
}
}
