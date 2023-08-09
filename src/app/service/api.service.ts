import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }

  //get function for get all contacts
  
  getAllContacts():Observable<MyContact>{

    return this.http.get(this.baseUrl)

  }
  //API call for fetch particular cotact details
  viewContact(contactId:any){
    //http://localhost:3000/contacts/c1
    return this.http.get(`${this.baseUrl}/${contactId}`)   //particular data
  }

  getGroupName(groupId:any){
    return this.http.get('http://localhost:3000/group/'+groupId)
  }

  //Function for fetch all groups from localhost:3000/group
  getAllGroups(){
    return this.http.get('http://localhost:3000/group')
  }

  //Function for adding new contact to server
  addContact(contactBody: any){
    return this.http.post(this.baseUrl,contactBody)
  }

  //Function for deleting contact from server
  deleteContact(contactId:any){
    return this.http.delete(`${this.baseUrl}/${contactId}`)
  }

  //Function for updating contact from server
  updateContact(contactId:any, contactBody:any){
    return this.http.put(`${this.baseUrl}/${contactId}`, contactBody)
  }

}
