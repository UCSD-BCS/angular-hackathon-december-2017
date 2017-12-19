import { Component, OnInit } from '@angular/core';

import { Employee } from './employee/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Jubilant Octo Waddle';
  currentEmployee: Employee;

  ngOnInit() {
    this.currentEmployee = new Employee(123, 'Frank', 'Castle', 'fcastle@ucsd.edu');
  }
}
