import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LenderRoutingModule } from './lender-routing.module';
import { LenderComponent } from './lender.component';

@NgModule({
  imports: [CommonModule, TranslateModule, LenderRoutingModule],
  declarations: [LenderComponent]
})
export class LenderModule {}
