import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ProjectDetailComponent } from './projectdetail.component';

const routes: Routes = [
  {
    path: 'projectdetail',
    component: ProjectDetailComponent,
    data: { title: extract('ProjectList') }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectDetailRoutingModule {}
