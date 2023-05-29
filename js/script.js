 const email = document.querySelector("#email");
  const errorMessage= document.querySelector("#errorMessage");
  const error = document.querySelector("#error");
  let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  function check(){
    if(email.value.match(regExp)){
      email.style.bordercolor = "green";
    }
    else{
      email.style.borderColor = "red";
      errorMessage.style.display = "block";
      error.style.display = "block";
    }
  }