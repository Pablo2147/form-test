import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  genders: Gender[] = [
    { value: 'M', viewValue: 'Male' },
    { value: 'F', viewValue: 'Female' },
  ];

  customerForm!: FormGroup;

  minDate: Date;
  maxDate: Date;

  isLoading: Boolean;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    // Set the minimum age to 18 years and the maximum to 80 years.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, new Date().getMonth(), new Date().getDate());
    this.maxDate = new Date(currentYear - 18, new Date().getMonth(), new Date().getDate());

    this.isLoading = true;
  }

  ngOnInit(): void {
    this.initForm();

    // simulate page load
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  initForm(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      lastName: ['', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      cellphone: ['', [
        Validators.required,
        Validators.pattern('^([0-9]{10})$')
      ]],
      homephone: ['', [
        Validators.required,
        Validators.pattern('^([0-9]{10})$')
      ]],
      address: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      profession: ['', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      incomes: [null, [
        Validators.required,
        Validators.pattern('^([0-9]){1,10}$')
      ]]
    });
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      // simulate call to api to save data
      this.isLoading = true;
      setTimeout(() => {
        this.onCancelReset();
        this.isLoading = false;
        this._snackBar.open('New Customer Added!', 'Close');
      }, 2000);

    }
  }

  onCancelReset(): void {
    this.customerForm.reset();
  }
}
