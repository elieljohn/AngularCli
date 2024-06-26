import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginginComponent } from './loggingin.component';

describe('LogginginComponent', () => {
  let component: LogginginComponent;
  let fixture: ComponentFixture<LogginginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogginginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogginginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
