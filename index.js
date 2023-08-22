const textArea = document.querySelector(".texto-a-encriptar");
const mensaje = document.querySelector(".resultado-mensaje__encriptado");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage = "none"
}
function encriptar(stringEncriptada){
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["o", "ober"],
        ["a", "ai"], 
        ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["a", "ai"],
        ["u", "ufat"]
    ];
        stringDesencriptada = stringDesencriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if (stringDesencriptada.includes(matrizCodigo[i][1]))
        {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], 
            matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function copyText(){
    var textarea = document.getElementById("myTextarea");

    textarea.select();

    document.execCommand("copy");

    alert("Texto cpiado")
}