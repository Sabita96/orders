import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/http-service/order-service/order.service';
import { ToastrService } from "ngx-toastr";


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
  constructor(private orderService: OrderService,private  toastr: ToastrService) {}

  ngOnInit(): void {}
  submitOrder() {
    console.log('URL AND VALUES', this.order);

    this.orderService.createOrder(this.order).subscribe(
      
      (res: any) => {
        console.log('res', res);
        this.toastr.success("Your Order has been submitted", "Success", {
          timeOut: 3000,
        });

      },
      (err) => {
        this.toastr.error("Your Order not able to create! Pleae try some other time", "Failure", {
          timeOut: 3000,
        });
        console.log('er', err);

      }
    );
  }
}
