import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {

  allContacts:MyContact[]=[]     //initially empty array
  heading="Contact Details"
  url="https://mywindowshub.com/wp-content/uploads/2013/01/user-account.jpg"
  
  searchKey:string=''

  // system current date and time
  loginDate:any
  constructor(private api:ApiService){
    this.loginDate=new Date()
  }

  //ngOnInit() - Angular lifecycle hook
  ngOnInit():void{
    this.getAllContacts()
  
  }

  getAllContacts(){
    this.api.getAllContacts().subscribe((data:any)=>{
      console.log(data);     //array of contacts
      this.allContacts=data   //array of contacts
      
    })

  }

  nameChange(){
    alert("name change")
  }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((data:any)=>{
      this.getAllContacts()
      alert('Contact deleted')
    })
  }

}
