import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectListRoutingModule } from './projectlist-routing.module';
import { ProjectListComponent } from './projectlist.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    ProjectListRoutingModule
  ],
  declarations: [ProjectListComponent]
})
export class ProjectListModule {}
