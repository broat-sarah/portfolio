import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Header component -', () => {
    let component: any;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        });

        fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        component = fixture.debugElement.nativeElement;
    });

});
