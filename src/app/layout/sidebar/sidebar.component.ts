import { Component, Input, OnInit } from '@angular/core';
import { SidebarToggleService } from 'src/app/layout/sidebar-toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed$ = this.sidebarToggleService.isCollapsed$;

  constructor(private sidebarToggleService: SidebarToggleService) {}

  ngOnInit(): void {
  }
}
