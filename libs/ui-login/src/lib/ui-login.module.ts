
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { WildComponent } from './wild/wild.component';
import { MaterialModule } from '@styling-app/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PipesModule } from '@styling-app/pipes';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, PipesModule],
  declarations: [LoginComponent, WildComponent, RegisterComponent],
  exports: [LoginComponent, WildComponent],
})
export class UiLoginModule {}
