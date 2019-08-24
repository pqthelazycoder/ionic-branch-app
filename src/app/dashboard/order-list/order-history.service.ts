import { Injectable } from '@angular/core';
import {Order} from './order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private _orders: Order[] = [
      new Order('TRN001', 'First Order' , 'Paid', '08/20/2019', 15000, 'Beef and Pork Combi'),
      new Order('TRN002', 'Second Order' , 'Not Paid', '08/20/2019', 15000, 'Beef and Pork Combi'),
      new Order('TRN003', 'Third Order' , 'Cancel', '08/20/2019', 15000, 'Beef and Pork Combi')
  ];

  get orders() {
      return [...this._orders];
  }
  constructor() {}
}
