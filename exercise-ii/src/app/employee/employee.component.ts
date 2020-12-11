import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class employeecomponent  {
  message : string = "Successfully Stored!";
  isValid : boolean = true;

  employees : any = [
    {"id": 101, "name" : "Alexandar", "salary":30000, 
      address : {"state":"KA", "city": "BLR"}}, 
    {"id": 102, "name" : "Bruce", "salary":40000, 
      address : undefined}, 
    {"id": 103, "name" : "Charles", "salary":20000, 
      address : undefined},
    {"id": 104, "name" : "David", "salary":50000, 
      address : {"state":"MH", "city": "MBI"}
    }    
  ];

}