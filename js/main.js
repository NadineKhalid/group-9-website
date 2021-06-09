 var getuUserName = prompt("hello! who are you? please provide your name: ");

 console.log(getuUserName);

 document.getElementById("showUserName").innerText = getuUserName;

 //tooltip

 $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })