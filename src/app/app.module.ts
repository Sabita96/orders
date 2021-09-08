import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderListComponent } from './components/order-list/order-list.component';
import { FormsModule } from '@angular/forms';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [AppComponent, NavbarComponent, OrderListComponent, CreateOrderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,BrowserAnimationsModule,ToastrModule.forRoot(),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
