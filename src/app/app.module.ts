import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { NewEmployeeFormComponent } from './employee/new-employee-form/new-employee-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    NewEmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
