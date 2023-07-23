// crear una función que devuelve una promesa con una solicitud HTTP usando jQuery
function httpGet (url) {
    return new Promise (function (resolve, reject) {
      // usar la función $.ajax de jQuery
      $.ajax ({
        url: url,
        method: 'GET',
        success: function (response) {
          // resolver la promesa con la respuesta
          resolve (response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // rechazar la promesa con el error
          reject (errorThrown);
        }
      });
    });
  }
  
  // usar la función para obtener los datos del usuario con promesas encadenadas
  httpGet ('https://api.example.com/nombre')
    .then (function (nombre) {
      // guardar el nombre en una variable
      var nombre = nombre;
  
      // devolver otra promesa para obtener el email
      return httpGet ('https://api.example.com/email');
    })
    .then (function (email) {
      // guardar el email en una variable
      var email = email;
  
      // devolver otra promesa para obtener el teléfono
      return httpGet ('https://api.example.com/telefono');
    })
    .then (function (telefono) {
      // guardar el teléfono en una variable
      var telefono = telefono;
  
      // mostrar los datos del usuario en la consola
      console.log ('Nombre: ' + nombre);
      console.log ('Email: ' + email);
      console.log ('Teléfono: ' + telefono);
    })
    .catch (function (error) {
      // manejar el error
      console.error ('Ocurrió un error: ' + error);
    });
  