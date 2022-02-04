import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lapi3Component } from './lapi3.component';

describe('Lapi3Component', () => {
  let component: Lapi3Component;
  let fixture: ComponentFixture<Lapi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lapi3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lapi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
