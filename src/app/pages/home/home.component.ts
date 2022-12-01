import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService,private toastr:ToastrService) { }
 username:string=""
 user:any=null
 repos:any=null
  ngOnInit(): void {
  }
handleclick(){
  this.userService.getUserData(this.username).subscribe((user)=>{
    this.user=user
    
  },(error)=>{
    this.toastr.error('not loaded!', 'Toastr fun!');
  })

  this.userService.getRepos(this.username).subscribe((data)=>{
    this.repos=data;
  },(error)=>{
    this.toastr.error('not loaded!', 'Repos not found');
  })
}


}
