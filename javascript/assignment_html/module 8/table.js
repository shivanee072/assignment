
function table(){
    var arr = " "
    for(var i=2;i<=1000;i++)
    {
        for(var j=1;j<=10;j++)
        {
            arr += i*j+" "
        }
        arr+="<br>"
    }
    postMessage(arr)
}

table()