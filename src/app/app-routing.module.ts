import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'order-list', loadChildren: './dashboard/order-list/order-list.module#OrderListPageModule' },
  { path: 'new-order', loadChildren: './dashboard/new-order/new-order.module#NewOrderPageModule' },
  { path: 'stocks', loadChildren: './dashboard/stocks/stocks.module#StocksPageModule' },
  { path: 'reports', loadChildren: './dashboard/reports/reports.module#ReportsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
