import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService{

  constructor(private httpClient : HttpClient) { }

  public doRegistration(user: User){
    return this.httpClient.post("http://demo5338466.mockable.io/register", 
    user, {responseType: 'text' as 'json'});
  }

  public getUsers(){
    return this.httpClient.get("http://demo5338466.mockable.io/getAllUsers");
  }

  public getUserByEmail(email: string){
    return this.httpClient.get("http://demo5338466.mockable.io/findUser");
    // return this.httpClient.get("http://demo5338466.mockable.io/findUser/" + email);
  }

  public deleteUser(id: number){
    // return this.httpClient.delete("http://demo5338466.mockable.io/cancel/" + id);
    return this.httpClient.delete("http://demo5338466.mockable.io/cancel");
  }

}
