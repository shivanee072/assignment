var a = ["hello","how","are","you"]
async function uppercase(a){
    if(a.length<1)
    throw new Error("Array empty")
    return incr = a.map(n=>n.toUpperCase());
    }
    
    async function test(){
        try{
            let res = await uppercase(a);
            console.log(res);
        }
        catch(e){
            console.log(e)
        }
    }
    test();