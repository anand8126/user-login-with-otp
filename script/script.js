function captcha() {
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let c = Math.floor(Math.random() * 10);
  let d = Math.floor(Math.random() * 10);
  let e = Math.floor(Math.random() * 10);
  let f = Math.floor(Math.random() * 10);

  return "" + a + b + c + d + e + f;
}

function loginClick() {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let enterCaptcha = document.getElementById("enterCaptcha").value;

  let displayCaptcha = document.getElementById("code").innerText;

  let message = document.getElementById("message");

  let mockUser = [
    {
      username: "Anand",
      password: "password",
    },
    {
      username: "user1",
      password: "password1",
    },

    {
      username: "user2",
      password: "password2",
    },
    {
      username: "user3",
      password: "password3",
    },
    {
      username: "user4",
      password: "password4",
    },
    {
      username: "user5",
      password: "password5",
    },
  ];

  let found = mockUser.find(function (user) {
    return (
      user.username === userName &&
      user.password === password &&
      enterCaptcha === displayCaptcha
    );
  });

  if (found) {
    message.innerHTML = "<h1>User Login Successfully </h1>";
    message.style.color = "green";
    message.querySelector("h1").style.fontWeight = "400";
    message.querySelector("h1").style.fontSize = "22px";
  } else {
    message.innerHTML = "!! Invalied username or password or captcha code";
    message.style.color = "red";
  }
}

function bodyload() {
  document.getElementById("code").innerText = captcha();
}

function getNewCode() {
  document.getElementById("code").innerText = captcha();
}
