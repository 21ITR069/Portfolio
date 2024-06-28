
// function A(callback){
//         console.log("hi");
//         callback();
// }
// function B(){
//     console.log("hello")
// }
// A(B);

// function greet(name, callback){
//     console.log('Preparing to greet')
//     setTimeout(()=>{
//         callback("hello",name)

//     },2000)
// }
// function displayGreeting(message,name){
//     console.log(message,",",name)
// }
// greet("yuvan",displayGreeting)

 function func(){
    const number = Math.random();
    return new Promise((resolve, reject)=>{
        if(number >0.5){
            resolve(number);
        }else{
            reject(new Error("The number is lesser"));
        }
    });
 }
 func()
 .then((data)=>{
    console.log("The number is greater than 0.5",data);
 })
 .catch((err)=>{
    console.error(err)
 });