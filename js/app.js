//Variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const botonEnviar = document.getElementById('enviar');
const formmularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
//EventListener

enventListeners();

function enventListeners(){
    document.addEventListener('DOMContentLoaded', desactivarBoton);

    email.addEventListener('blur', verificarCampos);
    asunto.addEventListener('blur', verificarCampos);
    mensaje.addEventListener('blur', verificarCampos);
   
    formmularioEnviar.addEventListener('submit',enviarEmail);

    resetBtn.addEventListener('click', resetFormulario);
}


//Funciones

/*Desactivar boton*/
function desactivarBoton(){
    botonEnviar.disabled = true;
}


/*Verificar campos*/
function verificarCampos(){
    validarLongitud(this);

    if(this.type === 'email'){
        verificarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value != '' && asunto.value != '' && mensaje.value!=''){
        if(errores.length === 0){
            botonEnviar.disabled = false;
        } else{ botonEnviar.disabled = true;}
        
    }
    
}

function verificarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@')!==-1 && campo.value.length>0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//cuando se envia el correo
function enviarEmail(e){
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block'; 

    //Gif que envio email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display ='none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formmularioEnviar.reset();
        },5000)
        
    }, 2000);

    console.log('mailenviado');
}


//Verifica longitud del texto en campos
function validarLongitud(campo){

    if(campo.value.length > 0 ){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//Resetear formulario
function resetFormulario(e){
    e.preventDefault();
    formmularioEnviar.reset();
}