import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessResponseComponent } from './success-response.component';

describe('SuccessResponseComponent', () => {
  let component: SuccessResponseComponent;
  let fixture: ComponentFixture<SuccessResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
