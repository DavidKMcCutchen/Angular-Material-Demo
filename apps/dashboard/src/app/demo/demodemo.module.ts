import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demodemo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '@styling-app/material';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [CommonModule, DemoRoutingModule, FormsModule, MaterialModule, FlexLayoutModule],
})
export class DemoModule {}
