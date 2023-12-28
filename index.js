const inputValue = document.querySelector("#Uname");
const saveBtn = document.querySelector("Button");
const userWelcomed = document.querySelector("span");

function constructWelcomeText(v) {

  return v ? `Hi ${v} Nice Meeting You`: 'Can I Know You ?';

};

saveBtn.addEventListener("click", (e) =>{
   
  const textValue = inputValue.value;
  console.log(textValue);

   localStorage.setItem("name", textValue);
   userWelcomed.innerHTML = constructWelcomeText(textValue);
   inputValue.value = "";

  // console.log(saveBtn);
});


function welcome(){
  const welcomeUser = localStorage.getItem("name");

  userWelcomed.innerHTML = constructWelcomeText(welcomeUser);
};

function clearInput() {
  localStorage.clear();
  userWelcomed.innerHTML = constructWelcomeText(null);
  inputValue.value = "";
};

