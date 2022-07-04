import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'styling-app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

}
