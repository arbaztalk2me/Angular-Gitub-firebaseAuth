import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService,private toastr:ToastrService,private router:Router) { }

  email:string="";
  password:string="";


  handleSignup(){
    this.auth.signup(this.email,this.password)
    .then((res)=>{
      this.router.navigateByUrl('/')
      this.toastr.success("SignUp Success")
    })
    .catch(
      (error)=>{
        this.toastr.error("Signup Failure")
      }
    )
  }


  ngOnInit(): void {
  }

}
