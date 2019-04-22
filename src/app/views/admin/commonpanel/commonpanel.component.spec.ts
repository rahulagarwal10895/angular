import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonpanelComponent } from './commonpanel.component';

describe('CommonpanelComponent', () => {
  let component: CommonpanelComponent;
  let fixture: ComponentFixture<CommonpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
