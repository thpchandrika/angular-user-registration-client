import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User("","", 0,"");
  message: any;

  constructor(private service : UserRegistrationService){
  }

  public registerNow(){
    let response = this.service.doRegistration(this.user);
    response.subscribe((data) => this.message = data);
  }

  

  ngOnInit(): void {    
  }

}
