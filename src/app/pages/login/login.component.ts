import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../core/services/users.service';
import { Login, Token } from '../../core/interfaces/users.interfaces';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../core/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy{

  suscriptionForm$:Subscription;

  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly loaderService: LoaderService
  ) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      email: new FormControl(undefined, [Validators.required, Validators.email]),
      password: new FormControl(undefined, [Validators.required])
    });
    this.usersService.cleanSession();
  }

  login(): void {
    const login : Login = {
      email: btoa(this.form.get('email')?.value),
      password: btoa(this.form.get('password')?.value)
    };
    this.suscriptionForm$ = this.usersService.login(login).subscribe({
      next: (response: Token) => {
        this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Bienvenido al sistema'});
        this.loaderService.show();
        response.token&&response.token!==null?this.usersService.saveToken(response.token):null;
        setTimeout(() => {
          this.router.navigateByUrl('clients');
        }, 500);
      },
      error: (error: any) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    });
  }

  ngOnDestroy(): void {
    this.suscriptionForm$&&this.suscriptionForm$!==null?this.suscriptionForm$.unsubscribe():null;
  }

}
