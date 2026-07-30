import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],

  // providers: [NotificationService] creates a new service instance
  // scoped only to this component and its children.
  providers: [NotificationService],

  templateUrl: './notification.html',
  styleUrl: './notification.css'
})
export class Notification {

  constructor(private notificationService: NotificationService) {}

  sendNotification() {
    this.notificationService.showMessage(
      'This is a component level notification'
    );
  }

}