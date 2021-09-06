import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/http-service/order-service/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  order: any = {
    customerCode: '',
    customerName: '',
    commodity: '',
    emailId: '',
  };
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}
  submitOrder() {
    console.log('sssssssssss', this.order);
    this.orderService.createOrder(this.order).subscribe(
      (res: any) => {
        console.log('res', res);
      },
      (err) => {
        console.log('er', err);
      }
    );
  }
}
