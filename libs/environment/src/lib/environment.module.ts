import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEnvironment } from './styling.model';
import { USER_ENVIRONMENT } from './styling.token';



@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: UserEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: USER_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
