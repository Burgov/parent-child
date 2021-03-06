import { Component, OnInit } from '@angular/core';
import {ParentService} from "./parent.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [ParentService]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activate($event: any) {
    console.log('Obtain providers from ', $event)
  }

  deactivate($event: any) {
    console.log('Dismiss providers from ', $event)
  }
}
