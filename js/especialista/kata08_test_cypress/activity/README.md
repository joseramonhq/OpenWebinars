crear un test cypress

npm init
npm i -D cypress

------------------- crear un servidor para cypress

npm i -D connect serve-static
crear un archivo server.js
poner este codigo de servidor:

---

let connect = require("connect");
let serverStatic = require("serve-static");
connect()
.use(serverStatic(\_\_dirname))
.listen(8080, () => console.log("Server running on 8080..."));

---

se ejecuta con node server.js

Pero si le añadimos al inicio del archivo server:

#!/usr/bin/env node

le quitamos la extension al archivo server.js y queda en server

y le damos permisos de ejecucion con:
sudo chmod +x server

lo podremos ejecutar con :
./server

---

creamos el directorio cypress/e2e
creamos el archivo [nombre_del_archivo].cy.js es ese directorio

Añadimos el código del test.

describe("index", () => {
it("User generate activity when click button", () => {
cy.visit("http://localhost:8080");
cy.get(".request").contains("Generate new one").click();;

    	cy.get("div.activity h4").should("exist");
    	cy.get("div.activity a").should("exist");
    	cy.get(".activity > a").should("have.attr", "href");

    });

});

La primera parte es para ejecutarlo en el servidor creado, la segunda en el interior los test.

Corre los test. Hay dos maneras:
npx cypress open -> los corre en una aplicacion

npx cypress run -> los corre en la terminal

Siempre corre el servidor antes de ejecutarlos
