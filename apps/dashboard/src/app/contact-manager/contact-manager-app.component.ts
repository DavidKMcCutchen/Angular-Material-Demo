import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '@styling-app/api-interfaces';
import { UserFacade } from '@styling-app/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'styling-app-contact-manager-app',
  templateUrl: './contact-manager-app.component.html',
  styleUrls: ['./contact-manager-app.component.scss'],
})
export class ContactManagerAppComponent implements OnInit {
  // allUsers$: Observable<User[]> = this.userFacade.allUsers$;
  // selectedUser$: Observable<User> = this.userFacade.selectedUsers$;
  
  constructor(
    private userFacade: UserFacade,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'))
  }

  ngOnInit() {
    // this.userFacade.loadUsers();
    // this.allUsers$.subscribe(data => {console.log(data)})
  }
}
