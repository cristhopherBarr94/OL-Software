import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public toggle: boolean = true;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {}

  ngOnInit(): void {}

  public handleHover() {
    this.toggle = false;
  }

  public handleOut() {
    this.toggle = true;
    this.accordion.closeAll();
  }
}
