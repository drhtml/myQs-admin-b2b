import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddminSettingComponent } from './addmin-setting.component';

describe('AddminSettingComponent', () => {
  let component: AddminSettingComponent;
  let fixture: ComponentFixture<AddminSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddminSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddminSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
