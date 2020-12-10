import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { EMPTY, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { NotificationsService } from 'src/app/shared/services/notifications.service'

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  readonly rootURLOrg1 = "http://167.71.249.87:8000/notas";
  readonly rootURLOrg2 = "http://167.71.249.87:8001/notas";

  constructor(private http: HttpClient,
    private notificationsService: NotificationsService) { }

  initNotasOrg1(nota): Observable<any> {
    console.log("dentro org1")
    return this.http.post<any>(this.rootURLOrg1 + '/initNotasOrg1', { nota: nota })
      .pipe(
        // tap(console.log)
        catchError(err => {
          if (err.status === 500) {
            this.notificationsService.showNotification('Verifique CNPJ da nota para este usuário ou contate suporte', 'OK', 'error');
            return EMPTY
          }
        })
      )
  }

  initNotasOrg2(nota): Observable<any> {
    console.log("dentro org2")
    return this.http.post<any>(this.rootURLOrg2 + '/initNotasOrg2', { nota: nota })
      .pipe(
        // tap(console.log)
        catchError(err => {
          if (err.status === 500) {
            console.log(err)
            this.notificationsService.showNotification('Verifique CNPJ da nota para este usuário ou contate suporte', 'OK', 'error');
            return EMPTY
          }
        })
      )
  }
}
