// let dom=document.getElementById("link")
// console.dir(dom)
// link.href="https://www.facebook.com"
// let h2 = document.getElementById("heading-2");
// h2.remove();

// let dom = document.getElementById("box__padding")
// console.dir(dom)

let square = document.getElementById("square")

let x = 0;
let y = 0;
let step = 10;
let unit = "px"

function render(){
square.style.top = y + unit
square.style.left = x + unit

}
function printDetail(){
console.log({ x:x, y:y , step:step, unit:unit})
}
function Up(){
y -= step
render()
}
function Down(){
y += step
render()
}
function Right(){
x += step
render()
}
function Left(){
x -= step
render()
}

// async function getData(){
//     let res = await axios.get("http://dummy.restapiexample.com/api/v1/employees")
//     let data = res.data

//     let table = document.getElementById("my-table")
//     let tBodyContent = ""
//     data.forEach(record =>{
//         let id = record.id
//         let name = record.employee_name
//         let age = record.employee_salary
//         let salary= recordemployee_age
//         let template =`<tr>
//         <td>${id}</td>
//         <td>${name}</td>
//         <td>${age}</td>
//         <td>${salary}</td>
//         </tr>`
//         tBodyContent += template
//     })
//     table.tBodies[0].innerHTML = tBodyContent;
// }
// getData()


//     let dom = document.getElementById("my-table")
//     console.dir(dom)
    
    
