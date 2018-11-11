import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { CreateProjectComponent } from './createproject.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/createproject', pathMatch: 'full' },
    {
      path: 'createproject',
      component: CreateProjectComponent,
      data: { title: extract('CreateProject'), state: 'createproject' }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CreateProjectRoutingModule {}
