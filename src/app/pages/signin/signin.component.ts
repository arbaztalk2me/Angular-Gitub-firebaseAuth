import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router,private toastr:ToastrService) { }


  email:string=""
  password:string=""

  handleSingin(){
    this.auth.signin(this.email,this.password)
    .then(()=>{
      this.route.navigateByUrl('/')
    })
    .catch(()=>{
      this.toastr.error("something went wrong")
    })
  }

  ngOnInit(): void {
  }

}
