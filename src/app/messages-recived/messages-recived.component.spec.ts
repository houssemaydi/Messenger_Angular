import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesRecivedComponent } from './messages-recived.component';

describe('MessagesRecivedComponent', () => {
  let component: MessagesRecivedComponent;
  let fixture: ComponentFixture<MessagesRecivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesRecivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesRecivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
