document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    //   console.log("btn clicked");
    const pageTitleElement = document.getElementById("page-title");
    console.log(pageTitleElement);
    pageTitleElement.innerText = "Updated page title text";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  //   console.log("login button is clicked");
  const userInfoE1 = document.getElementById("user-info");
  userInfoE1.innerText = "User logged in successfully";
});
