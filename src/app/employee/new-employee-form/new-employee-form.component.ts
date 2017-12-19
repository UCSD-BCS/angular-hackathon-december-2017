import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'jaw-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styles: []
})
export class NewEmployeeFormComponent implements OnInit {
  formModel: Employee = new Employee(125, 'Luke', 'Cage', 'lcage@ucsd.edu');

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    console.info('submitting!', this.formModel);
  }

}
