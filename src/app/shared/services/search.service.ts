import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotificationsService } from 'src/app/shared/services/notifications.service'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly rootURL = "http://167.71.249.87:8000/notas";

  constructor(private http: HttpClient,
    private notificationsService: NotificationsService) { }

  compareNotas(start_date, end_date): Observable<any> {
    return this.http.post<any>(this.rootURL + '/compareNotasOrg1', { start_date, end_date })
      .pipe(
        tap(console.log)
      )
  }
}
