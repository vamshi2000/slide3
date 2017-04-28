import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideformComponent } from './slideform.component';

describe('SlideformComponent', () => {
  let component: SlideformComponent;
  let fixture: ComponentFixture<SlideformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
