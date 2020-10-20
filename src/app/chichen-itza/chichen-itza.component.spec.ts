import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChichenItzaComponent } from './chichen-itza.component';

describe('ChichenItzaComponent', () => {
  let component: ChichenItzaComponent;
  let fixture: ComponentFixture<ChichenItzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChichenItzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChichenItzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
