import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClientsService } from '../../core/services/clients.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvancedSearch, Clients } from '../../core/interfaces/clients.interfaces';
import { saveAs } from 'file-saver';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit, OnDestroy {

  listSuscription$:Subscription;
  searchSuscription$:Subscription;
  advancedSearchSuscription$: Subscription;
  createdSuscription$: Subscription;
  modifiedSuscription$: Subscription;
  deletedSuscription$: Subscription;
  exportSuscription$: Subscription;

  @ViewChild('modal') modal: any;

  showAdvancedSearch = false;
  showModal = false;

  searchForm: FormGroup;

  clients: Clients[];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly clientsService: ClientsService,
    private confirmationService: ConfirmationService
  )
  {
    this.createForm();
  }

  createForm(): void {
    this.searchForm = this.formBuilder.group({
      search: new FormControl(undefined, [Validators. required])
    });
  }

  ngOnInit() {
    this.listClients();
  }

  listClients(): void {
    this.searchForm.reset();
    this.listSuscription$ = this.clientsService.listClients().subscribe({
      next: (response: Clients[]) => {
        this.clientsSetData(response);
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error en el sistema' });
      }
    });
  }

  clientsSetData(data: any): void {
    this.clients = data;
  }

  modifiedClient(client: Clients): void {
    this.showModalNewModified();
  }

  search(): void {
    this.searchSuscription$ = this.clientsService.search(this.searchForm.get('search')?.value).subscribe({
      next: (response: Clients[]) => {
        this.clientsSetData(response);
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error en el sistema' });
      }
    });
  }

  showAdvanced(): void {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  applyAdvancedSearch(form: FormGroup): void {
    const data: AdvancedSearch = {
      name: form.get('name')?.value?form.get('name')?.value:null,
      email: form.get('email')?.value?form.get('email')?.value:null,
      phone: form.get('phone')?.value?form.get('phone')?.value.replace('(', '').replace(')', '').replace('-', '').replace(' ', ''):null,
      startDate: form.get('startDate')?.value?form.get('startDate')?.value:null,
      endDate: form.get('endDate')?.value?form.get('endDate')?.value:null,
    };
    this.advancedSearchSuscription$ = this.clientsService.advancedSearch(data).subscribe({
      next: (response: Clients[]) => {
        this.clientsSetData(response);
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.toString().split(':')[1] });
      }
    });
  }

  showModalNewModified(client?: Clients): void {
    this.showModal = true;
    this.modal.title=client?'Modified Client':'New Client';
    this.modal.client=client;
    client?this.modal.setData():this.modal.form.reset();
    client?this.modal.form.get('email')?.disable():this.modal.form.get('email')?.enable();
  }

  cancelModal(event: any): void {
    event?this.showModal=false:null;
  }

  save(data: any): void {
    this.showModal = false;
    if (data.id===1) {
      this.createdSuscription$ = this.clientsService.createdClient(data.client).subscribe({
        next: (response: Clients) => {
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Cliente con nombre ' + response.bussinessId + ' creado correctamente'});
          this.listClients();
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.toString().split(':')[1] });
        }
      });
    }
    else{
      this.modifiedSuscription$ = this.clientsService.modifiedClient(data.client).subscribe({
        next: (response: Clients) => {
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Cliente con nombre ' + response.bussinessId + ' modificado correctamente'});
          this.listClients();
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.toString().split(':')[1] });
        }
      });
    }
  }

  deleteClient(id: number): void {
    this.confirmationService.confirm({
      header: 'Confirmación',
      message: '¿Seguro desea eliminar el cliente?',
      acceptIcon: 'pi pi-check mr-2',
      rejectIcon: 'pi pi-times mr-2',
      rejectButtonStyleClass: 'p-button-outlined p-button-sm',
      acceptButtonStyleClass: 'p-button-sm',
      accept: () => {
        this.deletedSuscription$ = this.clientsService.deletedClient(id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Cliente eliminado correctamente'});
            this.listClients();
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.toString().split(':')[1] });
          }
        });
      }
    });
  }

  export(): void {
    this.exportSuscription$ = this.clientsService.exportClients(this.clients).subscribe({
      next: (response: any) => {
        const blob = new Blob([response.body], {type: 'text/csv; charset=utf-8'});
        saveAs(blob, 'Clients-Export');
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.toString().split(':')[1] });
      }
    });
  }

  ngOnDestroy(): void {
    this.listSuscription$&&this.listSuscription$!==null?this.listSuscription$.unsubscribe():null;
    this.searchSuscription$&&this.searchSuscription$!==null?this.searchSuscription$.unsubscribe():null;
    this.advancedSearchSuscription$&&this.advancedSearchSuscription$!==null?this.advancedSearchSuscription$.unsubscribe():null;
    this.createdSuscription$&&this.createdSuscription$!==null?this.createdSuscription$.unsubscribe():null;
    this.modifiedSuscription$&&this.modifiedSuscription$!==null?this.modifiedSuscription$.unsubscribe():null;
    this.deletedSuscription$&&this.deletedSuscription$!==null?this.deletedSuscription$.unsubscribe():null;
    this.exportSuscription$&&this.exportSuscription$!==null?this.exportSuscription$.unsubscribe():null;
  }

}
