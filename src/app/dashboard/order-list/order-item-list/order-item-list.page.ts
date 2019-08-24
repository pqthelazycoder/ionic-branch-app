import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderItemServiceService} from './order-item-service.service';
import {OrderItem} from './order-item';

@Component({
  selector: 'app-order-item-list',
  templateUrl: './order-item-list.page.html',
  styleUrls: ['./order-item-list.page.scss'],
})
export class OrderItemListPage implements OnInit {
    loadedOrderItems: OrderItem[];
    constructor( private orderItemService: OrderItemServiceService,
                 private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.loadedOrderItems = this.orderItemService.orderItems;
    });
  }
}
