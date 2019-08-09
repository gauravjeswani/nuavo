import { Component, OnInit } from '@angular/core';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { HelpService} from '../help.service';
import { HelpSection } from '../help.section';
import { ChatService } from '../chat.service';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {


  helpSections: HelpSection[];

  constructor(private chatbox: ChatboxComponent, private help: HelpService, private chat: ChatService) { }

  ngOnInit() {
    this.helpSections = this.help.helpSections;
  }

  getIntentCalled() {
    return this.chat.getIntentCalled();
  }

  getGroup() {
    return this.help.intentGrouping.get(this.chat.getIntentCalled());
  }


  sendMessageFromLink(message: string) {
    this.chatbox.formValue = message;
    this.chatbox.sendMessage();
  }
}
