import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email:any;
  constructor(private adminService: AdminService,private router : Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    adminEmail : new FormControl('',[Validators.required]),
     password : new FormControl('',[Validators.required])
  })
  onSubmit(){
    console.log(this.adminEmail?.value,this.password?.value)
    this.email=this.adminEmail?.value;
    this.adminService.getAdmin(this.email,this.password?.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['editPage'])
      },
      (error) => {
        alert("please provide valid credentials")
        console.warn(error.error);
        console.log("failure");
      },

    )

    }

  get adminEmail(){
    return this.loginForm.get('adminEmail')
  }

  get password(){
    return this.loginForm.get('password')
  }



}
