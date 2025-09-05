import { Component } from '@angular/core';
import { SidebarToggleService } from './layout/sidebar-toggle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hr-dashboard';
   isCollapsed$: Observable<boolean>;
  constructor(private sidebarToggleService: SidebarToggleService) {
    this.isCollapsed$ = this.sidebarToggleService.isCollapsed$;
  }
  toggleSidebar() {
    this.sidebarToggleService.toggle();
  }
}
