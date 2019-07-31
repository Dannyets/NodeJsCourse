import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InScrollViewAnimatedItemComponent } from './in-scroll-view-animated-item.component';

describe('InScrollViewAnimatedItemComponent', () => {
  let component: InScrollViewAnimatedItemComponent;
  let fixture: ComponentFixture<InScrollViewAnimatedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InScrollViewAnimatedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InScrollViewAnimatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
