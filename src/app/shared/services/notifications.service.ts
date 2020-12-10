import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { NotificationsComponent } from '../components/notifications/notifications.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',

  }

  showNotification(displayMessage: string, buttonText: string, messageType: 'upload' | 'success' | 'error') {
    this.snackBar.openFromComponent(NotificationsComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
        type: messageType
      },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: messageType
    })
  }
}
