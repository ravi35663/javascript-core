import('./index.js').then((Module)=>{
    Module.method();
}).catch(err=>{
    console.log("Error is ",err);
})
// import('./index').then(res=>{
//     console.log("Response is ",res);
// })
function person(){
    console.log("This is person function");
}
console.log("Module is ");