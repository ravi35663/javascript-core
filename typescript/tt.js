const data = {
    name:"Cat1",
    child:[
        {
            name:'cat2',
            child:[
                {
                    name:'cat3',
                    child:[]
                },
                {
                    name:'cat4',
                    child:[]
                },
                {
                    name:'cat5',
                    child:[]
                },
            ]
        },
        {
            name:'cat6',
            child:[
                {
                    name:'cat7',
                    child:[]
                },
                {
                    name:'cat8',
                    child:[]
                },
                {
                    name:'cat9',
                    child:[]
                },
            ]
        }
    ]
}

function result(data,arr=[]){
    const child = data.child;
    arr.push(data.name)
    for(let item of child){
        result(item,arr);
    }
    return arr;
}

console.log("Arr is: ",result(data));

