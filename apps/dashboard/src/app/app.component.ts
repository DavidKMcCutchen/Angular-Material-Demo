import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeaturesAuthFacade } from '@styling-app/core-state';


@Component({
  selector: 'styling-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authFacade.isUserAuthenticated$;

  constructor(
    private authFacade: FeaturesAuthFacade
  ) {}


}
