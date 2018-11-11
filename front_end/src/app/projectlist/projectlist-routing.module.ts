import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ProjectListComponent } from './projectlist.component';

const routes: Routes = [
  {
    path: 'projectlist',
    component: ProjectListComponent,
    data: { title: extract('ProjectList') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectListRoutingModule {}
