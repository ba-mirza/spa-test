import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if(this.form.valid) {
      console.log(this.form.value);
      this.authService.signUp(this.form.value);
      this.route.navigate(['/home']);
    } else return
  }

  // signUpLogin() {
  //   this.route.navigate(['home'])
  // }

}
