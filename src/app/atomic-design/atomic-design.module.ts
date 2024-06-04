import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderComponent } from './atoms/loader/loader.component';
import { TopBarComponent } from './atoms/top-bar/top-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { SideBarComponent } from './atoms/side-bar/side-bar.component';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { FormAdvancedSearchComponent } from './molecules/form-advanced-search/form-advanced-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TableCrudComponent } from './molecules/table-crud/table-crud.component';
import { DialogModule } from 'primeng/dialog';
import { ModalNewModifiedComponent } from './molecules/modal-new-modified/modal-new-modified.component';
import { DatePipe } from '../shared/pipes/date.pipe';
import { PhonePipe } from '../shared/pipes/phone.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    TopBarComponent,
    SideBarComponent,
    FormAdvancedSearchComponent,
    TableCrudComponent,
    ModalNewModifiedComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    SidebarModule,
    AvatarModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    CalendarModule,
    TableModule,
    DialogModule,
    DatePipe,
    PhonePipe
  ],
  exports: [
    LoaderComponent,
    TopBarComponent,
    SidebarModule,
    SideBarComponent,
    AvatarModule,
    MenuModule,
    FormAdvancedSearchComponent,
    InputMaskModule,
    CalendarModule,
    TableModule,
    TableCrudComponent,
    ModalNewModifiedComponent
  ]
})
export class AtomicDesignModule { }
