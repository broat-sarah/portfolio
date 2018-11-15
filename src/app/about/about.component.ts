import { Component} from '@angular/core';
import { animation, animate, trigger, state, style, transition, keyframes  } from '@angular/animations';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent{
  start: boolean = false
  stringInterpolation: string = "About"
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
