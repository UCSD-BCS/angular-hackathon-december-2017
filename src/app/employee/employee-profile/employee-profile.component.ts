import { Component, OnInit, Input } from '@angular/core';

import { Employee } from '../employee.model';

@Component({
  selector: 'jaw-employee-profile',
  templateUrl: './employee-profile.component.html'
})
export class EmployeeProfileComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
