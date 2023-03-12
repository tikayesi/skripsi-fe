import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { AuthService } from '../auth.service';
import { Login } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
    private readonly loginService: AuthService) { }

  loginForm: FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required, Validators.minLength(4)])
  })



  signUp(){
    this.router.navigateByUrl('/register')
  }


  login(params: Login){
    if(this.loginForm.valid){
    if(params.username === 'admin@example.com' && params.password === 'password'){
      sessionStorage.setItem("role", "admin")
      // this.loginService.login(params)
      // this.loginService.login(params).subscribe((res: any) => {
      //   console.log('login success with username '+ res.data.username)
      //   sessionStorage.setItem("token", "Bearer " + res.data.token);
        this.router.navigateByUrl('/pages')
      // })

      // alert('login success with username '+ params.username)
      // sessionStorage.setItem('token', '1234')
      // this.router.navigateByUrl('/todo-list')
    // } else{
    //   alert('Invalid email or password!')
    }else if(params.username === 'user@example.com' && params.password === 'password'){
      sessionStorage.setItem("role", "user")
      this.router.navigateByUrl('/pages/report-list')
    }else if(params.username === 'manager@example.com' && params.password === 'password'){
      sessionStorage.setItem("role", "manager")
      this.router.navigateByUrl('/pages')
    }else{
      alert('Invalid email or password!')
    }
  }
  }


  form(property: string): FormGroup{
    return this.loginForm.get(property) as FormGroup;
  }


}
