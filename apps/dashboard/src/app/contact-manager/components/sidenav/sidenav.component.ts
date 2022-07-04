import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UserFacade } from '@styling-app/core-state';
import { User } from '@styling-app/api-interfaces';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'styling-app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  allUsers$: Observable<User[]> = this.userFacade.allUsers$;
  users: Observable<User[]>;

  public isScreenSmall: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userFacade: UserFacade
    ) { }

    @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)` ])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
      
      this.userFacade.loadUsers();
      this.users = this.allUsers$;
      this.allUsers$.subscribe(data => {console.log(data)});

      
  }


}
