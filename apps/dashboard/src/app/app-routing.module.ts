import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
// import { LoginComponent, WildComponent } from "@sample/ui-login";
// import { FeaturesAuthGuard, FeaturesUnAuthGuard } from '@sample/core-data';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';




const routes: Route[] = [
  {path: 'demo', loadChildren: () => import('./demo/demodemo.module').then(m => m.DemoModule)},
  {path: 'contact-manager', loadChildren: () => import('./contact-manager/contact-manager.module').then(m => m.ContactManagerModule)},
  {path: 'home', component: AppComponent},
  // {path: 'login', component: LoginComponent, canActivate: [FeaturesUnAuthGuard] },
  // {path: 'register', component: RegisterComponent, canActivate: [FeaturesUnAuthGuard]},
  {path: '**', redirectTo: 'contact-manager'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class RoutingModule { }