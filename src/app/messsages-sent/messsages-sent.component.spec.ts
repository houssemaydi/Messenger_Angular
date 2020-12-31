import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesssagesSentComponent } from './messsages-sent.component';

describe('MesssagesSentComponent', () => {
  let component: MesssagesSentComponent;
  let fixture: ComponentFixture<MesssagesSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesssagesSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesssagesSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
