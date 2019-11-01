// 

//---------------------------------------------------------
//SAIIIIIIIIIIIIIIIIIII

// let classc4e = {
//     name : "Huy",
//     age : 18,
//     year : 2000,
//     id : 1855    
// }
// let check = prompt("Bạn có muốn thêm không")
// switch(check.toLocaleLowerCase()){
//     case "y":
//     let key = prompt ("Bạn muốn thêm key gì");
//     let value =prompt ("Bạn muốn thêm value gì");
//     classc4e.assign({},key)
//     classc4e.assign({},value)
//     alert(JSON.stringify(classc4e));
//     break;
// case "n":
//     console.log("n")
//     break;
// default:
//     console.log("n")
// }










// let student ={
//     name : "Huy",
//     age : 18,
//     nationnality :"Viet Nam"
// }
// let check = prompt("Ban co muon xoa k?");
// switch (check.toLocaleLowerCase()){
//     case "y":
//         let key = prompt("Ban Muon xoa gi");
//         delete student[key]
//         alert(JSON.stringify(student))
//         break;
//     case "n":
//     console.log("n")
//     break;
//     default :
//     console.log("n")

    
// }



// function forEach (arr){
//     console.log(arr)
//     for(let i=0; i<arr.leng) {


//     }
//   }









// function map(arr, callback){
//     let arr = [1, 2, 3, 4]
//     callback(item);
//     return item*item
//     console.log(arr)
    
// }


// function transforArray(arr,callback){
//     let result =[]
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i])
//         result.push(callback(arr[i]))
        
//     }
//     return result
// }

// function sqrt(item){
//     return (item * item)
// }


// console.log(transforArray([1,2,3,4], sqrt))


// let a = prompt (" Số thứ nhất là");
// let b = prompt (" Số thứ hai là");
// let add = function (a,b){
//     return ( a + b)
// }
// console.log(add)


// var x = 5;
// var y = 2;
// var z = x - y;
// console.log(z)



// let array1 = [1, 3, 5 ,6];
// const map = array1.map(x => x+x);
// console.log(map)




// let newarr =
// [{key : "name" , value : "Huy"},
// {key : "age", value: 18},
// {key:"university",value:"Hau"}];
// let refomattedArr=newarr.map(obj => {
//     let rObj ={}
//     rObj[obj.key]= obj.value;
//     return rObj;
// });



//-----------------------Bài tập về map -----------------
// let Array = [1 ,3 ,4 ,7 ,9].map
// (function(x){
// return x*x
// })
// console.log(Array)


// let Arr = [1 ,4 ,6 ,2 ,5];
// let Arr1 = Arr.map(function(item){
//   return item * item

// })
// console.log(Arr1)




//-----------------------Bài tập về filter-------------------
// let Fruit = [ "Apple", "Banana", "Ogran","Avocado","Mango"]
// function filterItem(query){
//     return Fruit.filter(function(el){
//         return (el).toLocaleLowerCase().indexOf(query.toLocaleLowerCase())> -1;
//     })
    
// }
// console.log(filterItem("an"))


// let Fruit = [ "Apple", "Banana", "Ogran","Avocado","Mango"].filter
// function(x){}


// function sayHello () {
//     console.log("Hello !");
// }


// //-------------------Bài tập hàn add-----------
// function add(a,b){
//     return a+b
//   }
//   console.log(add(1,2));




// //------------Bài tập subtract-------------
// function subtract {
// 	let a;
// 	let b;
// 	return a+b;
// }
// console.log(subtract(5,3));




//Bài 4 
// function add(a,b){
//     return a + b;
// }
// function executeOperation1(a,b) {
// return add(a,b);
// }

// alert( executeOperation1(3,4))

//   //Bài 5 
//   function subtract(a,b){
//     return a - b;
//   }
//   function executeOperation2(a,b) {
//      return subtract(a,b);
//   }

//   let kq = executeOperation2(3,4)
//   alert(kq)

//   //Bài 6 
//   function multiple(a,b){
//     return a * b;
//   }
//   function executeOperation3(a,b) {
//     return mulltiple(a,b);
//   }
//   let kq = executeOperation3(3,4)
//   alert(kq)

//   //bài 7
//   function executeOperation(a,b,fn) {
//     return fn(a,b);
//   }

//   function add(a,b){
//       return a + b;
//     }

//   function subtract(a,b){
//       return a - b;
//     }

//   function multiple(a,b){
//       return a * b;
//     }

//   let kq1 = executeOperation(3,4,add)
//   alert(kq1)
//   let kq2 = executeOperation(3,4,subtract)
//   alert(kq2)
//   let kq3 = executeOperation(3,4,multiple)
//   alert(kq3)


//-----------------------------Bài anh Đại----------------------------------------------------------------------------------
// function map (arr, fn) {
//     if (!arr || !arr instanceof Array) throw new Error('Chi xu ly du lieu mang')
//     if (!fn) throw new Error('Khong tim thay ham')
//     let length = arr.length;
//     let result = []
//     for (let i = 0; i < length; i++) {
//       let item = arr[i]
//       result[i] = fn(item, i, arr)
//     }
//     return result
//   }

//   function filter (arr, fn) {
//     if (!arr || !arr instanceof Array) throw new Error('Chi xu ly du lieu mang')
//     if (!fn) throw new Error('Khong tim thay ham')

//     let result = []
//     let length = arr.length
//     for (let i = 0; i < length; i++) {
//       let item = arr[i]
//       if (fn(item, i, arr)) {
//         result.push(item)
//       }
//     }
//     return result
//   }

//   function reduce (arr, fn, initValue) {
//     if (!arr || !arr instanceof Array) throw new Error('Chi xu ly du lieu mang')
//     if (!fn) throw new Error('Khong tim thay ham')
//     let acc = initValue || 0;
//     let length = arr.length
//     for (let i = 0; i < length; i++) {
//       let item = arr[i]
//       acc = fn(acc, item, i, arr)
//     }
//     return acc
//   }

//   function getProperty (obj, path, defaultValue) {
//     let parsePath;
//     if (typeof path === 'string') {
//       parsePath = path.replace('[', '.')
//       parsePath = parsePath.replace(']', '')
//       parsePath = parsePath.split('.')
//     }
//     if (path instanceof Array) {
//       parsePath = path
//     }

//     if (!parsePath || parsePath.length === 0) {
//       return defaultValue
//     }
//     if (parsePath.length === 1) {
//       return obj[parsePath[0]] || defaultValue
//     }

//     let currentObj = obj[parsePath[0]]
//     if (typeof currentObj !== 'object') {
//       return currentObj || defaultValue
//     }
    
//     return getProperty(currentObj, parsePath.slice(1), defaultValue)
//   }

//   function chunk () {
    
//   }
//   // let nestedObject = { 'a': [{ 'b': { 'c': 3 } }] }
//   // let arr = [1, 2, 3, 4]

//   // map(arr, function (item) {
//   //   return item ** 2
//   // })

//   // filter(arr, function (item) {
//   //   return item % 2 === 0
//   // })

//   // reduce(arr, function (acc, item) {
//   //   return acc + item
//   // }, 20)

//   getProperty(nestedObject, ['a', 'b', 'c'], [])
//------------------------------------------------------------------------------



//----Cach viet function khac----------------
// let a =10
// let b = [1,2,3,4]
// b.map(item =>{
//   return item*item
// })