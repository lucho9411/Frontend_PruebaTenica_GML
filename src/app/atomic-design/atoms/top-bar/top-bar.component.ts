import { Component } from '@angular/core';
import { AppMainComponent } from '../../../app-main.component';
import { UsersService } from '../../../core/services/users.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  constructor(
    public appMain: AppMainComponent,
    private readonly usersServices: UsersService,
    private confirmationService: ConfirmationService,
    private readonly router: Router
    ) {}

  logout(): void {
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: '¿Seguro desea cerrar la sesión actual?',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-outlined p-button-sm',
      acceptButtonStyleClass: 'p-button-sm',
      accept: () => {
        this.usersServices.cleanSession();
        this.router.navigateByUrl('');
      }
    });
  }

}
