const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const content = `
            <td class="td" data-td>${nombre}</td>
              <td>${email}</td>
              <td>
                <ul class="table__button-control">
                  <li>
                    <a
                      href="../screens/editar_cliente.html"
                      class="simple-button simple-button--edit"
                      >Editar</a
                    >
                  </li>
                  <li>
                    <button
                      class="simple-button simple-button--delete"
                      type="button"
                    >
                      Eliminar
                    </button>
                  </li>
                </ul>
              </td>
    `;
  
    linea.innerHTML = content;
    return linea;
  }
  
  const listaClientes = () => {
    const promise = new Promise( (resolve,reyect) => {
      const table = document.querySelector("[data-table]");
  
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/perfil");
      http.send();
  
      http.onload = () => {
        const response = JSON.parse(http.response);
        if(http.status >= 400) {
          reyect(response);
        } else {
          resolve(response);
        }
      };
    }); 
    return promise;//retornará el resolve o el  reyect
  }
  
  listaClientes().then((data) => { //el retorno lo recibis cómo parámetro
    data.forEach(perfil => {
      const nuevaLinea =  crearNuevaLinea(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea);
      //return listaClientes(valor);
    });
    //.then((data) => {});
  })
  .catch((error) => alert("ocurrió un error "))
  
  