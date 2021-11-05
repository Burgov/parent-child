import {Component, OnDestroy, OnInit} from '@angular/core';
import {ParentService} from "../parent.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, OnDestroy {

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.parentService.register('child 1');
  }

  ngOnDestroy() {
    this.parentService.unregister('child 1');
  }

}
