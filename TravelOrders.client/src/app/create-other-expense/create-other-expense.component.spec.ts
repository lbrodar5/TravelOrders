import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOtherExpenseComponent } from './create-other-expense.component';

describe('CreateOtherExpenseComponent', () => {
  let component: CreateOtherExpenseComponent;
  let fixture: ComponentFixture<CreateOtherExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOtherExpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOtherExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
