import { Component, OnInit } from '@angular/core';
import {OrderHistoryService} from './order-history.service';
import {Order} from './order-model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orderHistory: Order[];

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit() {
    this.orderHistory = this.orderHistoryService.orders;
  }

}
