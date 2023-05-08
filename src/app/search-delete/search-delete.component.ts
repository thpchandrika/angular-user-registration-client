import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users: any;
  email: string="";
 
  constructor(private service : UserRegistrationService){
  }

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data) => this.users = data);
  }

  public deleteUser(id: number){
    console.log("id= " + id);
   let resp =  this.service.deleteUser(id);
   resp.subscribe((data) => this.users = data);
  }

  public findUserByEmailId(){
    console.log("email= " + this.email);
   let resp =  this.service.getUserByEmail(this.email);
   resp.subscribe((data) => this.users = data);
  }
}
