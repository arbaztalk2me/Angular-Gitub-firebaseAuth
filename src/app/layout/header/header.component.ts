import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }
  email:any=null;
  ngOnInit(): void {
    this.auth.getUser().subscribe((data)=>{
      this.email=data?.email
      console.log(data?.email)
    })
  }


  async handleSignOut(){
    try{
      const res=await this.auth.logout();
      this.route.navigateByUrl("/signin");
      this.email=null;

    }catch{
      alert("error")
    }
  }

}
