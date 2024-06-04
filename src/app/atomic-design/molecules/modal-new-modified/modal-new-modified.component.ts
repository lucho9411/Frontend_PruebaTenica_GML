import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Clients } from '../../../core/interfaces/clients.interfaces';

@Component({
  selector: 'app-modal-new-modified',
  templateUrl: './modal-new-modified.component.html',
  styleUrl: './modal-new-modified.component.scss'
})
export class ModalNewModifiedComponent {

  @Input() visible: boolean;
  @Input() title: string;
  @Output() cancelEmit = new EventEmitter<boolean>();
  @Output() saveEmit = new EventEmitter<any>();

  form: FormGroup;

  client: Clients;

  constructor(
    private readonly formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('[a-zA-Z]+(?: [a-zA-Z]+)+')]),
      phone: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required, Validators.email])
    });
  }

  setData(): void {
    this.form.get('name')?.setValue(this.client.bussinessId);
    this.form.get('phone')?.setValue(this.client.phone);
    this.form.get('email')?.setValue(this.client.email);
  }

  cancel(): void {
    this.cancelEmit.emit(true);
  }

  saveChanges(): void {
    let id: number;
    if(this.client&&this.client!==null) {
      this.client.bussinessId = this.form.get('name')?.value;
      this.client.email = this.form.get('email')?.value;
      this.client.phone = this.form.get('phone')?.value.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')
      id = 2;
    }
    else{
      this.client = {
        bussinessId: this.form.get('name')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')
      };
      id = 1;
    }
    this.saveEmit.emit({
      id,
      client: this.client
    });
  }

}
