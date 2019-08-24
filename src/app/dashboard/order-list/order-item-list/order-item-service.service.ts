import { Injectable } from '@angular/core';
import {OrderItem} from './order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderItemServiceService {
   private _orderItems: OrderItem[] = [{
       id: '0001',
       transactionId: 'TRN0001',
       amount: 50,
       description: 'Meat'
   }];
   get orderItems() {
     return [...this._orderItems];
   }
  constructor() { }
}
