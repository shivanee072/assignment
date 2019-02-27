import { Product } from "./product";
import {products} from "./store"

export class ProductService {
    public add(p:Product):boolean{
        products.push(p)
        return true;
    }

    public findAll(): Array<Product>{
        console.log(products)
        return products;
    }

    public findByCode(code:string) : Product{
        products.map((n)=>{
            //console.log(n)
            if(n.getCode()== code){
               console.log(n) ;
               return n;
            }
        
        })
        return null;
    }

    public remove(code:string) : boolean {
        products.map((n)=>{
            if(n.getCode() == code){
                
                return n;               
            }
        })
        return null ;
    }
}
let obj:ProductService = new ProductService()
obj.findAll();
obj.findByCode("1");