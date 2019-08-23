import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard.page';

const routes: Routes = [{
  path: 'tabs',
  component: DashboardPage,
  children: [
      {
          path: 'order-list',
          children: [
              {
                  path: '',
                  loadChildren: './order-list/order-list.module#OrderListPageModule'
              }
          ]      },
      {path: 'new-order',
       children: [ {
          path: '',
          loadChildren: './new-order/new-order.module#NewOrderPageModule'}]
      },
      {path: 'stock',
          children: [ {
              path: '',
              loadChildren: './stocks/stocks.module#StocksPageModule'}]
      },
      {path: 'reports',
          children: [ {
              path: '',
              loadChildren: './reports/reports.module#ReportsPageModule'}]
      },
      {
          path: '',
          redirectTo: '/dashboard/tabs/order-list',
          pathMatch: 'full'
      }
  ]
}, {
    path: '',
    redirectTo: '/dashboard/tabs/order-list',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}