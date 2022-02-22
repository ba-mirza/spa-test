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

  login() {
    const values = this.form.value;

    if(values.email && values.password) {
      this.authService.login(values.email, values.password)
        .subscribe(
          () => {
            console.log('User is logged in');
            this.route.navigate(['/home']);
          }
        )
    }
  }

}
