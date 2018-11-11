import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { CreateProjectRoutingModule } from './createproject-routing.module';
import { CreateProjectComponent } from './createproject.component';
// import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    CreateProjectRoutingModule
  ],
  declarations: [CreateProjectComponent],
  // providers: [QuoteService]
})
export class HomeModule {}
