var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/users";

http.open("POST", url, true);
http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

document.getElementById('send').addEventListener('click', function() {
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('lastName').value;
    var nacimiento = document.getElementById('born').value;

    var data = {
        name: nombre,
        lastName: apellido,
        nacimiento: nacimiento
    };

    http.onreadystatechange = function() {
        if (http.readyState == 4) { 
            if (http.status == 200) {
                // Aquí obtienes la respuesta de tu petición
                alert(http.responseText);
            } else {
                alert("Error en la solicitud: " + http.status);
            }
        }
    };

    http.send(JSON.stringify(data));
});