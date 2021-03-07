import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public toggle: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  public handleHover() {
    this.toggle = false;
  }

  public handleOut() {
    this.toggle = true;
  }
}
