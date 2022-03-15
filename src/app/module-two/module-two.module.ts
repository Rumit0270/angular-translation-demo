import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [CommonModule, TranslateModule.forChild()],
  exports: [FirstComponent, SecondComponent],
})
export class ModuleTwoModule {}
