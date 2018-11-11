import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { LenderComponent } from './lender.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/lender', pathMatch: 'full' },
    {
      path: 'lender',
      component: LenderComponent,
      data: { title: extract('Lender'), state: 'lender' }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LenderRoutingModule {}
