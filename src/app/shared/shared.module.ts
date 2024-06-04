import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AtomicDesignModule } from '../atomic-design/atomic-design.module';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DatePipe } from './pipes/date.pipe';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomicDesignModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    ToolbarModule,
    InputGroupModule,
    InputGroupAddonModule,
    DatePipe,
    FileSaverModule 
  ],
  exports: [
    AtomicDesignModule,
    ToastModule,
    ConfirmDialogModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    ToolbarModule,
    InputGroupModule,
    InputGroupAddonModule,
    DatePipe,
    FileSaverModule 
  ]
})
export class SharedModule { }
