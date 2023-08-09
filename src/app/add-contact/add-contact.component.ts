import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/model/myContact';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  allGroups: any[]=[];
  contactName: string=''  //var
  contact: MyContact={}  //object

  constructor(private api:ApiService, private router:Router){
    this.contact.groupId="Select Course"
  }

  ngOnInit():void{
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data //array of data (groups)
    })
  }

  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }

}
