import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarToggleService } from 'src/app/layout/sidebar-toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    
  }
 constructor(private sidebarToggleService: SidebarToggleService) {}

  toggleSidebar() {
    this.sidebarToggleService.toggle();
  }
}
