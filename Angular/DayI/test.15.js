function add(a,b){
    let p = new Promise((resolve,reject)=>{
        let res = a+b;
        resolve(res);
    })
    return p;
    }
    
    
    async function test(){
        let res = await add(10,20)
        console.log(res)
    }

    test();