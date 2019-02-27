import {Contact} from './contact';
import {contacts} from './store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ContactService{
    public contacts:Array<Contact>
    constructor()
    {
        this.contacts = contacts;
    }
    public findAll():Array<Contact>
    {
        // var c:Array<Contact>;
        // setTimeout(()=>{
        //     c=this.contacts
        // },5000)
        // return c;
        return this.contacts;
    }
    public findAllO():Observable<Array<Contact>>{  //use when data is given in streams
        var obs = Observable.create((o)=>{
            o.next(this.contacts); //o is like resolve
            // setTimeout(()=>{
            //  o.next([new Contact("rx","ry","2837")])
            // },4000)
        })
        return obs;
    }
    public findAllP(): Promise<Contact[]> //use when data will be given in one go
    {
        let p:Promise<Array<Contact>> = new Promise((resolve,reject)=>{
            
            setTimeout(()=>{
              resolve(this.contacts);
            },5000)
            // resolve(this.contacts);
        })
        return p;
    }
    public add(contact:Contact){
        if(contact.name!=""&&contact.email!=""&&contact.cell!=""){
        this.contacts.push(contact);
        }
        else{
            alert("All fields required ")
            let msg="Error";
        }
    }


    public remove(c:any){
        this.contacts.slice(c,c)
    }

    public err(){
        console.log("error")
    }
}