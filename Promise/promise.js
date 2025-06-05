// const promiseOne = new Promise((resovle,reject)=>{
//     //Do async task
//     //DB call ,cryptogrypayh,network call
//     setTimeout(()=>{
//         console.log("Async task is complested")
//         resovle()
//     },2000)
// })

// promiseOne.then(()=>{
//     console.log("Promise Consumed")
// })

// new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task two");
//         resovle();
//     },)
// }).then(()=>{
//     console.log("Aync 2 resolved")
// })
// console.log("hello woordd")



// const promiseThree = new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         resovle(
//             {
//                 username:"Nitish",
//                 email:"nk1234@gmail.com"
//             }
//         )
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })




// const promiseFour = new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resovle({
//                 username:"Nitish",
//                 age:22
//             })
//         } else {
//             reject('Error:Somthing went wrong')
//         }
//     },5000)
// })

//  promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>console.log("The Promise is either resolve is rejected"))





// const promiseFive = new Promise ((resovle,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resovle({
//                 usernmae:"Nitish Shah",
//                 age:24
//             })
//         } else {
//             reject('ERROR: Somethoing went wrong')
//         }
//     },5000)
// });


// async function cunsumePromiseFive(){
//     try {
//         const respose = await promiseFive;
//         console.log(respose)
//     } catch (error) {
//         console.log(error)
//     }
// }
//  cunsumePromiseFive()


 async function getAllUsersData(){
    try {
        const respose = await fetch('https://api.apis.guru/v2/list.json')
        const data = await respose.json()
        console.log(data)
    } catch (error) {
        console.log("E:",error)
    }
 }

 getAllUsersData()


 fetch('https://api.github.com/users/nitishshah200')
 .then((response)=>{
    return response.json()
 }).then((data)=>{
    console.log(data)
    console.log("Heelo Nitish Shah")
 }).catch((error)=>{
    console.log(error)
 })