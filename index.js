const inputValue = document.querySelector("#Uname");
const saveBtn = document.querySelector("Button");
const userWelcomed = document.querySelector("span");

saveBtn.addEventListener("click", (e) =>{
   
  const textValue = inputValue.value;
  console.log(textValue);

   inputValue = localStorage.setItem("name", textValue);
  // console.log(saveBtn);
});

function welcome(){
  const welcomeUser = localStorage.getItem("name");

  if (welcomeUser) {
    userWelcomed.innerHTML = welcomeUser;

  }else{
    h1.innerText = "Welcome Lovely";
  }



};

