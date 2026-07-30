import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message = '';

  showMessage(msg: string): void {
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }

}