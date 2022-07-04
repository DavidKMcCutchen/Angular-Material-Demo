import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app-routing.module';
import { MaterialModule } from '@styling-app/material';
import { UiLoginModule } from '@styling-app/ui-login';
import { PipesModule } from '@styling-app/pipes';
import { CoreDataModule } from '@styling-app/core-data';
import { CoreStateModule } from '@styling-app/core-state';
import { EnvironmentModule } from '@styling-app/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    UiLoginModule,
    PipesModule,
    CoreDataModule,
    CoreStateModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
