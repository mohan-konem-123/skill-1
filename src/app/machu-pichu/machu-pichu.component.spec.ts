import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachuPichuComponent } from './machu-pichu.component';

describe('MachuPichuComponent', () => {
  let component: MachuPichuComponent;
  let fixture: ComponentFixture<MachuPichuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachuPichuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachuPichuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
