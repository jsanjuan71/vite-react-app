import { useState } from 'react'
//import React from 'react'
//React.useState

function ListaDeTareas() {
    // Crear un estado para la lista de tareas
    // El estado inicia como un arreglo vacio
    // El estado se llama listaTareas
    // La funcion para actualizar el estado se llama setListaTareas

    const [listaTareas, setListaTareas ] = useState([])
    // Crear un estado para el texto de la tarea
    // El estado inicia como un string vacio
    // El estado se llama textoTarea
    // La funcion para actualizar el estado se llama setTextoTarea
    const [textoTarea, setTextoTarea] = useState('')

    /**
     * Manejador de evento onClick
     * Agrega el texto de la tarea al estado listaTareas
     */
    function clickAgregar() {
        // Si el texto de la tarea esta vacio, no hacer nada
        if (textoTarea.trim() === "") {
            return
        }
        // Agregar el texto de la tarea al estado listaTareas
        // usamos el operador spread para copiar el estado anterior y agregar el nuevo elemento
        setListaTareas( [...listaTareas, textoTarea] )
        // Limpiar el input de la tarea para que el usuario pueda escribir una nueva tarea
        setTextoTarea("")
    }

    /** 
     * Manejador de evento onInput
     * actualiza el estado textoTarea con el valor del input
     */
    function teclaPresionada(event) {
        // Obtener el valor del input
        const valor = event.target.value
        // Actualizar el estado textoTarea con el valor del input
        setTextoTarea(valor)
    }

    return(
        <>
            {/** Solo el encabezado de la lista */}
            <h1>Lista de Tareas</h1>
            {/** Si la lista de tareas esta vacia, mostrar un mensaje */}
            {listaTareas.length === 0 && <p>No hay tareas</p>}
            {/** Si la lista de tareas tiene elementos, mostrar la lista */}
            <ul>
                {/** Iterar sobre la lista de tareas y mostrar cada una de ellas */}
                {listaTareas.map((tarea, index) => {
                    {/** Retornar un elemento li por cada tarea */}
                    {/** La propiedad key es obligatoria en un elemento iterado */}
                    {/** La propiedad key debe ser unica en el contexto de la lista */}
                    {/** La propiedad key recibe el indice de cada elemento iterado */}
                    return <li key={index}>{tarea}</li>
                })}
            </ul>
            <hr />
            {/** Input para escribir la tarea */}
            {/** El valor del input es textoTarea que es un state */}
            {/** Cada vez que se presiona una tecla en el input, se ejecuta la funcion teclaPresionada */}
            <input value={textoTarea} onInput={teclaPresionada}  type='text' placeholder='Escriba la tarea' />
            {/** El boton llama a la funcion clickAgregar */}
            <button onClick={clickAgregar}  >Agregar</button>
        </> 
    )
}

export default ListaDeTareas