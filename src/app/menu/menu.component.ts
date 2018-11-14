import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { WindowRef } from '../window-ref.service';
import { Notifications } from '../services/notifications.service';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menuElements: MenuElement[] = [
    {link: '/', text: 'Home'},
    {link: '/web', text: 'Web'},
    {link: '/print', text: 'Print'},
    // {link: '/external', icon: 'call_merge', text: 'External module'}, //not works because of https://github.com/angular/angular-cli/issues/8284
    {link: '/about', text: 'About'},
  ];
  @Input('contextual')
  @HostBinding('class.contextual')
  public contextual: boolean = false;


}

interface MenuElement {
  link: string;
  text: string;
}
