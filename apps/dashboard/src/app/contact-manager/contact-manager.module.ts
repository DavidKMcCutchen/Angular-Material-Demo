import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '@styling-app/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { UserFacade } from '@styling-app/core-state';
import { StylingService } from '@styling-app/core-data';

const routes: Routes = [
  {
    path: '',
    component: ContactManagerAppComponent,
    children: [
      {
        path: ':id',
        component: MainContentComponent,
      },
      {
        path: '',
        component: MainContentComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
})
export class ContactManagerModule {}
