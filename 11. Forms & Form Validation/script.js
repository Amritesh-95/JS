// 1. Reading values from input , textarea , select
// 2. Prevent default submission

// let nm = document.querySelector("#name")
// let form = document.querySelector("form")
// form.addEventListener("submit",e=>{
//     e.preventDefault();
//     if(nm.value.length<=2){
//         document.querySelector("#hide").style.display = "initial"
//     }else{
//         document.querySelector("#hide").style.display = "none"
//     }
// })

// 3. Inline and JS-based validation
// required , minlength , maxlength in html

// 4. Showing error messages conditionally

// 5. Pattern attribute vs custom regex
// pattern="[a-z]{3,8}"

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const USERNAME =
//     /^(?:[A-Za-z0-9_]|\p{Extended_Pictographic}|[\uFE0F\u200D]){3,20}$/u;

//     let user = USERNAME.test("aa_a🦉")
//     console.log(user)
// });

// Practice

// 1. Email/password validator

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const EMAIL =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

  // Password: 8-64 chars, 1 lowercase, 1 uppercase, 1 digit, 1 special
  const PASSWORD =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,64}$/;

  let emailans = EMAIL.test(email.value);
  let passans = PASSWORD.test(password.value);

  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
  }
  if (!passans) {
    document.querySelector("#passError").textContent = "Password is incorrect";
  }

  console.log(email.value);
  console.log(password.value);

  email.value = "";
  password.value = "";
});
