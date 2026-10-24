// 1. DOM Tree Structure
// node,element,text,comment

// 2. Selecting elements
// getElementById , getElementsByClassName , querySelector , querySelectorAll

// let abcd = document.getElementById("a")
// let abcd = document.getElementsByClassName("a")
// console.dir(abcd)

// let abcd = document.querySelector("h1")
// let abcd = document.querySelectorAll("h1")
// console.dir(abcd)

// 3. Text/content access
// innerText, textContent, innerHTML

// a) innerText
// let h1 = document.querySelector("h1")
// h1.innerText = "696969696969969"

// b) textContent
// let h1 = document.querySelectorAll("h1")
// h1.forEach(e => {
//     e.textContent = "959595959595959595"
// });

// c) innerHTML
// let h1 = document.querySelector("h1")
// h1.innerHTML = "<i>HUIHUI</>"

// 4. Attribute manipulation

// a) setAttribute href
// let a = document.querySelector("a");
// // a.href = ("https://www.google.com")
// // console.dir(a)

// a.setAttribute("href", "https://www.google.com");

//img
// let b = document.querySelector("img");

// b.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1792412776544-96ce20a071b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
// );

// b.removeAttribute("src")

// console.log(a.getAttribute("href"))

// 5. Dynamic DOM manipulation
// createElement , append , prepend , remove

// we can insert an element in the document before/after script.js

// let h1 = document.createElement("h1")
// h1.textContent = "HUIHUIHUI"

// // document.body.append(h1);  // after script.js in html
// // document.body.prepend(h1); // before script.js in html

// document.querySelector("body").prepend(h1);

// 6. Style Updates
// .style and classList (add, remove, toggle)

// let h1 = document.querySelector("h1")
// // h1.style.color = "blue"
// // h1.style.backgroundColor = "green"

// h1.classList.add("hulu")
// h1.classList.remove("hulu")
// h1.classList.toggle("hulu")

// Questions

// Q1. What is the DOM ? How does it represent the HTML structure?

// Document Object Model is a programming interface provided by web
// browsers that represents the page so that programs can change document
// structure,style,and content.

// The DOM represents a document with a logical tree . Each Branch of the
// tree ends in a node , and each node contains objects. DOM methods allow
// programmatic access to the tree. With them we can change the documents
// structure, style, or content.
// Nodes can also have event handlers attached to them. Once an event is triggered,
// the event handlers get executed.

// Q2. Name the types of nodes in the DOM tree.

// DOM tree consists of 12 node types , four most common types are :
// Document , Element , Text , Comment .

// Q3. What's the difference between an element node and a text node ?

{
  /* <p>Lorem ipsum dolor sit.</p> */
}

// Element Node                             // Text Node
// 1.Actual Tag is element node(<p></p>)    1.Text/Content inside p tag
// 2.Can have children (like <b></b>)       2.Cant have children

// Q4. Use querySelectorAll to select all buttons with class "buy-now".

// let buynow = document.querySelectorAll(".buy-now")
// console.log(buynow)

// Tasks

// Task 1. Select the heading of a page by ID and change its text to
// "Welcome to Sheryians!".

// let h1 = document.createElement("h1")
// h1.textContent = "WELCOME TO SHERYIANS CODING SCHOOL"

// document.querySelector("body").prepend(h1);

// h1.innerText = "Welcome to Sheryians!"
// let heading = document.querySelector("#heading")
// heading.innerText = "Welcome to Sheryians!"

// Task 2. Select all <li> elements and print their text using a loop

// let lis = document.querySelectorAll("li")

// lis.forEach(e=>{
//     console.log(e.textContent)
// })

// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i].textContent);
// }

// Task 3. When should we use textContent instead of innerText ?

// textContent is faster than innerText
// textContent works on hidden elements too but innerText cant

// Task 4. Select a paragraph and replace its content with:
// {
//   <b>updated</b> by JS
// }

// let para = document.querySelector("p")
// para.innerHTML = "<b>Updated</b> by JS"

// Task 5. How do you get the src of an image using js?

// let img = document.querySelector("img");
// console.log(img.src)
// console.log(img.getAttribute("src"));

// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1792410365507-e3e529e9ce2e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
// );
// console.log(img.getAttribute("src"));

// Task 6. Select a link and update its href to https://www.sheryians.com

// let a = document.querySelector("a")
// a.href = "https://www.sheryians.com"

// Task 7. Add a title attribute to a div dynamically.

// let tit = document.querySelector("div");

// tit.setAttribute("title", "TITLE");

// Task 8. Remove the disabled attribute from the button

// let btn = document.querySelector("button")
// btn.removeAttribute("disabled")

// Dynamic DOM manipulation

// Task 9. Create a new list item <li>New Task</li> and add it to the end of a <ul>

// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// li.textContent = "New Task"
// ul.appendChild(li)

// Task 10. Create a new image element with a placeholder source and add
// it at the top of a div.

// let img = document.createElement("img");

// img.setAttribute(
//   "src",
//   "https://plus.unsplash.com/premium_photo-1681433426886-3d6d17f79d53?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
// );
// img.classList.add("placeholder")
// document.querySelector("div").prepend(img)


// Task 11. Select the first item in a list and delete it from the DOM

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")

// ul.removeChild(li)

// Task 12. Add a highlight class to every even item in a list


// let li = document.querySelectorAll("ul li:nth-child(2n)")

// li.forEach(e=>{
//     e.classList.add("highlight")
// })

// Task 13. Set the font size of all <p> elements to 18px using .style

// let p = document.querySelectorAll("p")
// p.forEach(e=>{
//     e.style.fontSize = "38px"
// })