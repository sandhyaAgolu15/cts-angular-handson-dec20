import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeecomponent } from './employee.component';

describe('employeecomponent', () => {
  let component: employeecomponent;
  let fixture: ComponentFixture<employeecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ employeecomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(employeecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
