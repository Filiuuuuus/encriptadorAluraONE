const btnencriptar = document.getElementById("encriptar");
const btndesencriptar = document.getElementById("desencriptar");
var showTexto = document.getElementById("mostrarTexto");
const btncopiar = document.getElementById("copiar");
const validarTextarea = /^[a-z\s]{1,999}$/;

btnencriptar.addEventListener('click', () => {
    const entradaTexto = document.getElementById("ingresarTexto").value;
    
    if(validarTextarea.test(entradaTexto)){
        
        // 
        let textoEncriptado = entradaTexto.replace(/e/gm,'enter')
        .replace(/i/gm,'imes')
        .replace(/o/gm,'ober')
        .replace(/a/gm,'ai')
        .replace(/u/gm,'ufat');
        showTexto.innerHTML = textoEncriptado;
        // Acceder, remover el atributo "hidden" para mostrar bóton "Copiar"
        document.getElementById("copiar").removeAttribute('hidden');
        // Eliminar texto 
        document.querySelector('.aside__p').remove();
        // Eliminar Imagen Muñeco
        document.querySelector('.figuraMunieco').remove();
    }else {
        alert("¡Leer! *Solo minúsculas, sin tíldes ni caracteres especiales. ¡Gracias!");
    }
    
})

btndesencriptar.addEventListener('click', () => {
    const entradaTexto = document.getElementById("ingresarTexto").value;
    if(validarTextarea.test(entradaTexto)){
        let textoDesencriptado = entradaTexto.replace(/enter/gm,'e')
        .replace(/imes/gm,'i')
        .replace(/ober/gm,'o')
        .replace(/ai/gm,'a')
        .replace(/ufat/gm,'u');
        showTexto.innerHTML = textoDesencriptado;
        // Acceder, remover el atributo "hidden" para mostrar bóton "Copiar"
        document.getElementById("copiar").removeAttribute('hidden');
        // Eliminar texto 
        document.querySelector('.aside__p').remove();
        // Eliminar Imagen Muñeco
        document.querySelector('.figuraMunieco').remove();
    }else {
        alert("¡Leer! *Solo minúsculas, sin tíldes ni caracteres especiales. ¡Gracias!");
    }
})

btncopiar.addEventListener('click', () => {
    const contenido = document.getElementById("mostrarTexto");
    contenido.select();
    document.execCommand("copy");
    window.location.reload();
})

    