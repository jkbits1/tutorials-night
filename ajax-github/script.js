// github user finder example

function getGithubInfo (username) {
  var xmlhttp = new XMLHttpRequest();
  var ghInfo = {};

  xmlhttp.open("GET", "https://api.github.com/users/jkbits1", false);
  xmlhttp.send();

  if (xmlhttp.status === 200) {
    ghInfo = JSON.parse(xmlhttp.responseText);
    console.log(ghInfo);
  }
  else {
    console.log("whoops!");
  }

}

function getGHinfoAsync() {
  function reqListener () {
    console.log(this.responseText);
  }

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener);
  xhr.open("GET", "https://api.github.com/users/jkbits1");
  xhr.send();
}