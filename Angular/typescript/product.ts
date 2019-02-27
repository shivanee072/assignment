export class Product{
    private code:string ;
    private name:string;
    private price:number;

    constructor(code:string,name:string,price:number){
        this.code = code;
        this.name= name;
        this.price = price;
    }

    public show():void{
        console.log('code : '+this.code +' name ' + ':'+this.name+ ' price : '+this.price)
    }

    public getCode():string{
        return this.code;
    }
}


// var s:Product = new Product('xyz','tuv',123)
// s.show()