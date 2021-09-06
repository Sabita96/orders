import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpService: HttpService) {}

  getOrders() {
    return this.httpService.get('order');
  }
  getOrdersbyId(id:any)
  {
    return this.httpService.get('order/search?orderID='+id)
  }
}
