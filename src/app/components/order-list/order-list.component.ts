import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/http-service/order-service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders: any;
  orderId: any
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
  this.getAllOrders()
  }
  onSearch(){
    if(this.orderId.trim()){
      this.orderService.getOrdersbyId(this.orderId).subscribe(
        (res:any)=>{
      console.log('res',res);
      this.orders=[]
      this.orders.push(res.data);
        },(err)=>{
      
        }
          )
    }
    else this.getAllOrders()
    
  }

  getAllOrders(){
    this.orderService.getOrders().subscribe(
      (res: any) => {
        console.log('res', res);
        this.orders = res.data;
      },
      (err) => {
        console.log('er', err);
      }
    );
    
  }
  
}
