import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  
  

  getUserData=(username:string)=>{
    return this.http.get(`https://api.github.com/users/${username}`)
  }


  getRepos(username:string){
    return this.http.get(`https://api.github.com/users/${username}/repos`)
  }


}
