import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpService: HttpService) {}

  createOrder(order: any) {
    return this.httpService.post('order', order);
  }

  getOrders() {
    return this.httpService.get('order');
  }
  getOrdersbyId(id: any) {
    return this.httpService.get('order/search?orderID=' + id);
  }
}
