import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColosseumComponent } from './colosseum.component';

describe('ColosseumComponent', () => {
  let component: ColosseumComponent;
  let fixture: ComponentFixture<ColosseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColosseumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColosseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
