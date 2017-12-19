import { Component, OnInit } from '@angular/core';

import { Employee } from './employee/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Jubilant Octo Waddle';

  employees: Employee[];
  currentEmployee: Employee;
  creatingNew: boolean = false;

  ngOnInit() {
    this.employees = [
      new Employee(123, 'Frank', 'Castle', 'fcastle@ucsd.edu'),
      new Employee(124, 'Diana', 'Prince', 'dprince@ucsd.edu'),
      new Employee(125, 'Selina', 'Kyle', 'skyle@ucsd.edu')
    ];
  }

  setCurrent(employee: Employee): void {
    this.currentEmployee = employee;
  }
}
