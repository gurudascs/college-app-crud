import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  //variable creation, datatype- string, initial value empty string
  contactId:string=''
  contact:any
  groupId:string=''
  groupName:string=''

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId=data.contactId
      console.log(this.contactId);   //c1
      
      //API call
      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);
        this.contact=data
        this.groupId=data.groupId
        console.log(this.contact);  //particular contact details
        
        //function API call - group name
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data);   //array-{id: '3',name: 'friends'}
          this.groupName=data.name
          console.log(this.groupName);
          
          
        })
        
      })
    })
  }

}
