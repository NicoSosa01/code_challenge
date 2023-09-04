var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/users";
var nombre = document.getElementById('name');
var lastName = document.getElementById('lastName');
var nacimiento = document.getElementById('nacimiento');
http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
http.open("POST", url, true);

http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) { 
       //aqui obtienes la respuesta de tu peticion
       alert(http.responseText);
    }
}
http.send(JSON.stringify({name:nombre, lastName: lastName, nacimiento: nacimiento}));