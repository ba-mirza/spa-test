import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, delay, of } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/_models/login.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;
  message$?: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public hide: boolean = false;
  public show: boolean = true;

  constructor(
    private route: Router,
    public auth: AuthService,
    private currentRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.currentRoute.queryParams.subscribe((params: Params) => {
      if(params['loginAgain']) {
        this.message$?.next('Please, Sign in to continue!');
        setTimeout(() => {
          this.message$?.next('');
        }, 5000)
      } else if(params['authFiled']) {
        this.message$?.next('[AUTH FILED]: Please, could you try your login!')
      }
    })
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  public getErrorMessage() {
    const EMAIL = this.form.value.email;
    if(EMAIL.hasError('required')) {
      this.submitted = true;
      return 'You must enter email'
    }
    return EMAIL.hasError('email') ? 'Not a valid email' : this.submitted = true, '';
  }

  login() {
    if(this.form.invalid) {
      return
    }
    console.log(this.form);

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.route.navigate(['home']);
      this.submitted = false;
    }, () => this.submitted = false)
  }

}
