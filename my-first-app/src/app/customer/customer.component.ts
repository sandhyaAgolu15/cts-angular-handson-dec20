import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  name = 'sandhya';
  phone = 7997032310;
  customerInfo = {'id':123, 'dob':'1998-05-15', 'name':'sandhya'};
}
