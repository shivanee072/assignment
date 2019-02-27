import { Component } from '@angular/core';
import { HelloService } from 'src/app/hello/hello.service';

@Component({
    selector:'app-hello',
    templateUrl:'./hello.component.html',
    styleUrls:['./hello..component.css']
})

export class HelloComponent{
    constructor(private hs:HelloService){}
msg:string="Welcome to Angular Class ";
loc:string="PSL,Nagpur";
schedule='25 Feb-1 Mar';
btn_msg:string="OK";
isbuttondisabled:boolean = false;
isSpecial:boolean=true;
canSave:boolean=true;
hide:boolean=true;
stylename:string="s1";
txt:string = '';
public handleClick(e:Event) : void{
      this.canSave = !this.canSave
      this.isSpecial = !this.isSpecial
    //   alert(e.type)
    //   alert(e.target)
      
    //   alert(e.target.textContent)
    alert(this.hs.greet())
}


public show(msg):void{
    this.txt = msg;
}

}