import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '@app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output()
  openSidebar: EventEmitter<void> = new EventEmitter();

  @Output()
  logout: EventEmitter<void> = new EventEmitter();

  @Input()
  user: User;

  onLogout() {
    this.logout.emit();
  }

  ngOnInit() { }

}
