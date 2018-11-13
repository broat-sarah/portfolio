import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { By } from '@angular/platform-browser';
import * as sinon from 'sinon';
import { DebugElement, Directive, HostListener, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material';
import { MatIconModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { WindowRef } from '../window-ref.service';
import { Notifications } from '../services/notifications.service';
import { Subject, BehaviorSubject, of } from 'rxjs';

@Directive({
  selector: '[routerLink]'
})
class RouterLinkStubDirective {

  public navigatedTo: any = null;
  @Input()
  private routerLink: any;

  @HostListener('click')
  public onClick(): void {
    this.navigatedTo = this.routerLink;
  }
}

let fixture: ComponentFixture<MenuComponent>;
let nsServiceStub;
const windowRefStub = sinon.createStubInstance(WindowRef);

const isRegistered: Subject<boolean> = new BehaviorSubject(false);

let homeLink;
let webLink;
let printLink;
let aboutLink;


const setupTestBed = () => {
  nsServiceStub = sinon.createStubInstance(Notifications);
  nsServiceStub.isSubscribed.returns(isRegistered);
  nsServiceStub.isPushAvailable.returns(true);

  TestBed.configureTestingModule({
    imports: [MatMenuModule],
    declarations: [MenuComponent, RouterLinkStubDirective],
    providers: [
      {provide: Notifications, useValue: nsServiceStub},
      {provide: WindowRef, useValue: windowRefStub}
    ]
  });

  fixture = TestBed.createComponent(MenuComponent);
  fixture.detectChanges();
};

describe('Menu component.', () => {

  beforeEach(() => {
    isRegistered.next(false);
    windowRefStub._window = {
      on: (name, handler) => {
        // noop
      },
      off: () => {
        // noop
      }
    };
    setupTestBed();

    findSubscribeLink();
    const anchors: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));

    homeLink = anchors.find((de: DebugElement) => de.nativeElement.textContent.includes('Home'));
    webLink = anchors.find((de: DebugElement) => de.nativeElement.textContent.includes('Web'));
    printLink = anchors.find((de: DebugElement) => de.nativeElement.textContent.includes('Print'));
    aboutLink = anchors.find((de: DebugElement) => de.nativeElement.textContent.includes('About'));
  });

  it('Home link should be displayed', () => {
    expect(homeLink).toBeTruthy();
  });

  it('Web design link should be displayed', () => {
    expect(webLink).toBeTruthy();
  });

  it('Should display print design link', () => {
    expect(printLink).toBeTruthy();
  });

  it('Should display about and contact link', () => {
    expect(aboutLink).toBeTruthy();
  });


describe('Safari', () => {
  beforeEach(() => {
    isRegistered.next(false);
    windowRefStub._window = {
      on: (name, handler) => {
        // noop
      },
      off: () => {
        // noop
      },
      safari: {}
    };
    setupTestBed();
  });

});
