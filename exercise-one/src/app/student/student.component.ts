import { Component, OnInit } from '@angular/core';
import { student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class studentcomponent{
  student1 : student = new student(1, "Sandy", 85);
  student2 : student = new student(2, "Sandhya", 50);
  student3 : student = new student(3, "Agolu", 35);
  
}