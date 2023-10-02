document.addEventListener("DOMContentLoaded", function() {
    var http = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/users";
    var sendButton = document.getElementById('send');
    var responseElement = document.getElementById('response');

    sendButton.addEventListener('click', function() {
        var nombre = document.getElementById('name').value;
        var apellido = document.getElementById('lastName').value;
        var nacimiento = document.getElementById('born').value;

        var data = {
            name: nombre,
            lastName: apellido,
            nacimiento: nacimiento
        };

        http.open("POST", url, true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        http.onreadystatechange = function() {
            if (http.readyState == 4) { 
                if (http.status == 200) {
                    
                    responseElement.innerHTML = "Respuesta del servidor: " + http.responseText;
                } else {
                    responseElement.innerHTML = "Error en la solicitud: " + http.status;
                }
            }
        };

        http.send(JSON.stringify(data));
    });
});