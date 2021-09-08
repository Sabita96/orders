import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  localurl='http://localhost:8080/engine-rest/process-definition/key/EMP_SEARCH_WORKFLOW/start';
  constructor(private httpService: HttpService) {}

  createOrder(order: any) {
    // return this.httpService.post('order', order);
    
    console.log('Form Data');
    console.log(order);
    return this.httpService.post(this.localurl, order);
  }

  getOrders() {
    return this.httpService.get('order');
  }
  getOrdersbyId(id: any) {
    return this.httpService.get('order/search?orderID=' + id);
  }
}
