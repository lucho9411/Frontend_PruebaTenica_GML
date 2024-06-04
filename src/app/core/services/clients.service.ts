import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvancedSearch, Clients } from '../interfaces/clients.interfaces';
import { Observable, throwError, map, catchError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public handlerError(error: HttpErrorResponse, operation: string) {
    let err: any = '';
    if (error.status === 0) {
      err = 'El servicio ' + operation.toString() + ' no responde, por favor valide su conexión a internet o intente más tarde';
    }
    else {
      err = error.error;
    }
    return throwError(() => {
      let err: any = error?.error?.message?error?.error?.message:error.toString();
      throw new Error(err);
    });
  }

  listClients(): Observable<any> {
    return this.http.get<Clients[]>(`${environment.api}` + `${environment.endPoints.clients.path}` + `${environment.endPoints.clients.list}`).pipe(
      map((response) => response),
      catchError((error) => this.handlerError(error, 'listClients'))
    );
  }

  search(sharedKey: string): Observable<any> {
    return this.http.get<Clients[]>(`${environment.api}` + `${environment.endPoints.clients.path}` + `${environment.endPoints.clients.search}` + sharedKey).pipe(
      map((response) => response),
      catchError((error) => this.handlerError(error, 'searchSharedKey'))
    );
  }

  advancedSearch(data: AdvancedSearch): Observable<any> {
    return this.http.post<Clients[]>(`${environment.api}` + `${environment.endPoints.clients.path}` + `${environment.endPoints.clients.advancedSearch}`, data).pipe(
      map((response) => response),
      catchError((error) => this.handlerError(error, 'advancedSearch'))
    );
  }

  createdClient(client: Clients): Observable<any> {
    return this.http.post<Clients>(`${environment.api}` + `${environment.endPoints.clients.path}` + `${environment.endPoints.clients.created}`, client).pipe(
      map((response) => response),
      catchError((error) => this.handlerError(error, 'createdClient'))
    );
  }

  modifiedClient(client: Clients): Observable<any> {
    return this.http.put<Clients>(`${environment.api}` + `${environment.endPoints.clients.path}` + `${environment.endPoints.clients.modified}`, client).pipe(
      map((response) => response),
      catchError((error) => this.handlerError(error, 'modifiedClient'))
    );
  }

  deletedClient(id: number): Observable<any> {
    return this.http.delete<Clients>(`${environment.api}` + `${environment.endPoints.clients.path}` + `${environment.endPoints.clients.deleted}` + id).pipe(
      map((response) => response),
      catchError((error) => this.handlerError(error, 'deleteClient'))
    );
  }

  exportClients(clients: Clients[]): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*'
      }),
      responseType: 'blob' as 'json',
      observe: 'response' as 'response'
    };
    return this.http.post<any>(`${environment.api}` + `${environment.endPoints.clients.path}` + `${environment.endPoints.clients.export}`, clients, httpOptions).pipe(
      map((response) => response),
      catchError((error) => this.handlerError(error, 'exportClients'))
    );
  }
}
