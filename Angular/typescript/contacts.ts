export class Contact{
    constructor(private name:string ,private email:string ){}

public display():void{
    console.log('name : '+this.name+ ': email '+this.email)
}
}

let contact = new Contact('john','john@gmail.com');
contact.display()