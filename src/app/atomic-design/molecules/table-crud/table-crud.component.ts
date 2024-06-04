import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Clients } from '../../../core/interfaces/clients.interfaces';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrl: './table-crud.component.scss'
})
export class TableCrudComponent {

  @Input() clients: Clients[];
  @Output() reLoadTableEmit = new EventEmitter<boolean>();
  @Output() modifiedClientEmit = new EventEmitter<Clients>();
  @Output() deleteClientEmit = new EventEmitter<number>();

  reLoad(): void {
    this.reLoadTableEmit.emit(true);
  }

  modifiedClient(client: Clients): void {
    this.modifiedClientEmit.emit(client);
  }

  deleteClient(client: Clients): void {
    this.deleteClientEmit.emit(client.id);
  }

}
