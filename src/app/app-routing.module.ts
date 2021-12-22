import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pricing',
    loadChildren: () =>
      import('@lbk/pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: '',
    redirectTo: '/pricing',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
