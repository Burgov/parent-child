import {Component, OnDestroy, OnInit} from '@angular/core';
import {ParentService} from "../parent.service";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit, OnDestroy {

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.parentService.register('child 2');
  }

  ngOnDestroy() {
    this.parentService.unregister('child 2');
  }

}
