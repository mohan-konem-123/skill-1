import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristTheRedeemerComponent } from './christ-the-redeemer.component';

describe('ChristTheRedeemerComponent', () => {
  let component: ChristTheRedeemerComponent;
  let fixture: ComponentFixture<ChristTheRedeemerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristTheRedeemerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristTheRedeemerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
