import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TopComponent } from './top/top.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, TopComponent],
  imports: [CommonModule, TranslateModule.forChild()],
  exports: [TopComponent, HeaderComponent],
})
export class ModuleOneModule {}
