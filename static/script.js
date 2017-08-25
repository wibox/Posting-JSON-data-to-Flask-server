function sendData() {
  var user = document.getElementById('user').value
  var pswd = document.getElementById('pswd').value
  var jsonObj = {};
  jsonObj.username = user;
  jsonObj.password = pswd;
  //alert(jsonObj);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById('result').innerHTML = this.responseText;
    }
  };
  xmlhttp.open('POST', 'http://localhost:8080/process', true);
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  var toSend = JSON.stringify(jsonObj);
  xmlhttp.send(toSend);
}
