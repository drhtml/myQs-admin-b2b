import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanllengesComponent } from './challenges.component';

describe('ChanllengesComponent', () => {
  let component: ChanllengesComponent;
  let fixture: ComponentFixture<ChanllengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanllengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanllengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
