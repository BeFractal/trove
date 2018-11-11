import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BorrowerRoutingModule } from './borrower-routing.module';
import { BorrowerComponent } from './borrower.component';

@NgModule({
  imports: [CommonModule, TranslateModule, BorrowerRoutingModule],
  declarations: [BorrowerComponent]
})
export class BorrowerModule {}
