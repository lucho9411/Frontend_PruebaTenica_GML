import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-advanced-search',
  templateUrl: './form-advanced-search.component.html',
  styleUrl: './form-advanced-search.component.scss'
})
export class FormAdvancedSearchComponent{

  @Output() advancedSearchEmit = new EventEmitter<FormGroup>();

  form: FormGroup;

  errorEmail = false;

  constructor(
    private readonly formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(undefined),
      phone: new FormControl(undefined),
      email: new FormControl(undefined, [Validators.email]),
      startDate: new FormControl(undefined),
      endDate: new FormControl(undefined),
    });
  }

  applyAdvancedSearch(): void {
    this.advancedSearchEmit.emit(this.form);
  }

}
