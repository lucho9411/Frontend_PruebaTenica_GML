import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdvancedSearchComponent } from './form-advanced-search.component';

describe('FormAdvancedSearchComponent', () => {
  let component: FormAdvancedSearchComponent;
  let fixture: ComponentFixture<FormAdvancedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAdvancedSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
