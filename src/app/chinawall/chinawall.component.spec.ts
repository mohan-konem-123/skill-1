import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinawallComponent } from './chinawall.component';

describe('ChinawallComponent', () => {
  let component: ChinawallComponent;
  let fixture: ComponentFixture<ChinawallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinawallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinawallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
