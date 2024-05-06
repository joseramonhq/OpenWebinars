document.querySelector("#boton").addEventListener("click", event =>{
    let element = document.querySelector("#texto");
    let texto = element.value;
    element.value="";
    alert("Hola " + texto);

});

