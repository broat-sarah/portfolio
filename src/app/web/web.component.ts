import { Component } from '@angular/core';

@Component({
    templateUrl: './web.component.html',
    styles: [`
        div.wrapper {display: flex; flex-direction: row}
        .wrapper div {flex: 1;}
        .wrapper div { padding: 5px; }
    `]
})
export class WebComponent {}
