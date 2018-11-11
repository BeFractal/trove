import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { BorrowerComponent } from './borrower.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/borrower', pathMatch: 'full' },
    {
      path: 'borrower',
      component: BorrowerComponent,
      data: { title: extract('Borrower'), state: 'borrower' }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BorrowerRoutingModule {}
