import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshardhamComponent } from './akshardham.component';

describe('AkshardhamComponent', () => {
  let component: AkshardhamComponent;
  let fixture: ComponentFixture<AkshardhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkshardhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkshardhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
