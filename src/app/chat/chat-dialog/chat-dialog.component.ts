import { Component, HostListener } from '@angular/core';
import 'rxjs/add/operator/scan';
import { FeedbackSection } from '../feedback.section';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent {

  feedbackSection: FeedbackSection = new FeedbackSection('none', 'none', '', 0, 0, 0);

  constructor() {

  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
  
  }
}
