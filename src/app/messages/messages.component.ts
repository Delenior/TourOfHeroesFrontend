import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  /** Ez a komponenst nem használom már, de ha kitörlöm összeomlik a rendszer */

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
