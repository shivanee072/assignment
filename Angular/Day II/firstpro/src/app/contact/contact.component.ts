import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import { ContactService } from 'src/app/contact/contact.service';
import { contacts } from 'src/app/contact/store';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit ,OnDestroy{
  x=null;
  constructor(private cs:ContactService){}
  private contacts:Array<Contact>;
  // private contactService:ContactService = new ContactService();

  public add(nm:any,email:any,cell:any):void{
     
    this.cs.add(new Contact(nm.value,email.value,cell.value))
  
  
   }

   public delete(c:any){
     this.contacts.splice(c,1)
     
   }
  ngOnInit() {
    // this.contacts = this.cs.findAll()
    // this.cs.findAllP().then((data)=>{
    //   this.contacts = data;
    
    //})
    this.x=this.cs.findAllO().subscribe((data)=>{
      this.contacts = data;
    })
  }

ngOnDestroy(){
this.x.unsubscribe();
}

}
