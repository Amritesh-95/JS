// Any action in page of browser raises an event.
// Event Listener is the reaction to that action.

// 1. Event Binding - addEventListener , removeEventListener

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", (e) => {
//   h1.style.color = "red";
// });

// function sglclick () {
//   p.style.color = "green";
// }
// let p = document.querySelector("p"); // 1.Selecting the paragraph
// // 2. Changing the color of paragraph on click
// p.addEventListener("click",sglclick);

// p.addEventListener("dblclick", (e) => {
//   p.style.color = "yellow";
// });

// p.removeEventListener("click", sglclick);

// 2. Common Events - click , input, change , submit , mouseover , keyup

// a) input - any changes on screen means input including space and backspace

// let input = document.querySelector("input")
// input.addEventListener("input",e=>{
//     if(e.data !== null){
//         console.log(e.data)
//     }
// })

// b) change - it runs when input is selected or there is a change in textarea

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", (e) => {
//   device.textContent = `${e.target.value} Device Selected`;
//   console.log(e.target.value + " device selected")
// });

// c) keydown - reading and displaying texts on page

// let h = document.querySelector("h1");

// window.addEventListener("keydown", (e) => {
//   if (e.key === " ") {
//     h.textContent = "SPC";
//   } else {
//     h.textContent = e.key;
//   }
// });

// d) click and change - Creating a button with upload functionality

// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");
// btn.addEventListener("click", (e) => {
//   fileinp.click();
// });

// fileinp.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   if (file) {  // it can give undefined if file doesnt exist
//     btn.textContent = file.name;
//   }
// });

// e) submit

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main")

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("profile");
//   profile.classList.add("profile");

//   card.appendChild(profile);

//   let img = document.createElement("img");
//   img.setAttribute(
//     "src", inputs[0].value);

//   let h3 = document.createElement("h3")
//   h3.textContent = inputs[1].value
//   let h5 = document.createElement("h5")
//   h5.textContent = inputs[2].value
//   let p = document.createElement("p")
//   p.textContent = inputs[3].value

//   profile.appendChild(img)
//   card.appendChild(profile)
//   card.appendChild(h3)
//   card.appendChild(h5)
//   card.appendChild(p)

//   main.appendChild(card)

//   inputs.forEach(e=>{
//     if(e.type !== "submit"){
//         e.value = ""
//     }
//   })

// });

// f) mouseover

// let abcd = document.querySelector("#abcd")
// let a1 = document.querySelector("#a1")
// let a2 = document.querySelector("#a2")
// let a3 = document.querySelector("#a3")

// abcd.addEventListener("mouseover",e=>{
//     abcd.style.backgroundColor = "yellow";
// })

// abcd.addEventListener("mouseout",e=>{
//     abcd.style.backgroundColor = "red";
// })

// a1.addEventListener("mouseover",e=>{
//     a1.style.backgroundColor = "green";
// })

// a1.addEventListener("mouseout",e=>{
//     a1.style.backgroundColor = "blue";
// })

// a2.addEventListener("mouseover",e=>{
//     a2.style.backgroundColor = "orange";
// })

// a2.addEventListener("mouseout",e=>{
//     a2.style.backgroundColor = "purple";
// })

// a3.addEventListener("mouseover",e=>{
//     a3.style.backgroundColor = "black";
// })

// a3.addEventListener("mouseout",e=>{
//     a3.style.backgroundColor = "brown";
// })

// g) mousemove

// let abcd = document.querySelector("#abcd")

// window.addEventListener("mousemove",e=>{
//     abcd.style.top = e.clientY+ "px"
//     abcd.style.left = e.clientX + "px"
// })

// document.addEventListener('mouseleave', () => {
//   abcd.style.opacity = '0';
// });
// document.addEventListener('mouseenter', () => {
//   abcd.style.opacity = '1';
// });

// 3. Event Object - target , type preventDefault

// a) target & b) type

// let abc = document.querySelector("#abc");

// abc.addEventListener("click", (e) => {
//   console.log(e.type);
// });

// c) preventDefault

// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// 4. Event bubbling & capturing

// a) Event Bubbling

// Event bubbling is the default mechanism in JS where an event triggered on
// a nested element propagates upward through the DOM tree to its ancestor
// elements.

// document.querySelector("#nav").addEventListener("click", (e) => {
//   alert("clicked");
// });

// document.querySelector("button").addEventListener("click", (e) => {
//   e.stopPropagation();
// });

// adding line through using toggle

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// ul.addEventListener("click", (e) => {
//   e.target.classList.toggle("lt")
// });

// b) Event Capturing - opposite of bubbling

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   console.log("button clicked");
// });

// c.addEventListener("click", (e) => {
//   // e.stopPropagation();
//   console.log("button clicked from c");
// },true);

// b.addEventListener("click", (e) => {
//   console.log("button clicked from b");
// });

// a.addEventListener(
//   "click",
//   (e) => {
//     console.log("button clicked from a");
//   },
//   true,
// );

// whenever we click or raise an event , the eventflow/propagation works
// in two phase :
// first phase : event goes from top level element to bottom
// second phase :  event goes from raised element to parent

// first phase is always there but is off by default , if we turn it on
// we will get phase 1 first

// 5. Event Delegation

// Practice

// 1. Live character counter

// let inp = document.querySelector("input");
// // let span1 = document.querySelector("#span1");
// let span2 = document.querySelector("#span2");
// inp.addEventListener("input", (e) => {
//   // span1.textContent = inp.value.length;
//   let left = 20 - inp.value.length;
//   span2.textContent = left;
//   if (left < 0) {
//     span2.style.color = "red";
//   } else {
//     span2.style.color = "white";
//   }
// });
