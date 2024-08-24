const agregar = (valor) =>{
    document.getElementById('pantalla').value += valor
    console.log(valor)
}

const borrarTodo = () => {
    document.getElementById('pantalla').value = ' '
    console.log("Se borraron los datos")
}

const calcular = () => {
    operacion = document.getElementById('pantalla').value
    resultado= eval(operacion)
    document.getElementById('pantalla').value = resultado
}

const borrar = () => {
    operacion= document.getElementById('pantalla').value
    operacion= operacion.substring(0 , operacion.length - 1);
    document.getElementById('pantalla').value = operacion
}