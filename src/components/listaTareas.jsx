import {useEffect, useState, useRef} from 'react'

function ListaTareas() {

    const [listaTareas, setListaTareas ] = useState([])
    const [textoTarea, setTextoTarea] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const inputRef = useRef(null)

    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', ' ']

    console.log("INPUT inicial", inputRef ) // aqui siempre va ser null

    function componenteMontado() {
        console.log("INPUT", inputRef) // aqui ya tiene el valor del inpu

        fetch('https://dummyjson.com/todos')
            .then( response => response.json() )
            .then( data => {
                console.log("Respuesta", data.todos)
                setListaTareas( data.todos )
            })
    }

    function cambioListaTareas() {
        console.log("Cambio la lista de tareas")
    }

    useEffect( componenteMontado, [] )

    useEffect( cambioListaTareas, [listaTareas] )

    useEffect( () => {
        console.log("Texto de tarea cambio", textoTarea)
    }, [textoTarea] )

    function clickAgregar() {
        if( symbols.some( symbol => textoTarea.includes(symbol) ) ) {
            inputRef.current.style.backgroundColor = "red"
            setErrorMessage('No se permiten caracteres especiales')
            return 
        }
        setListaTareas( [...listaTareas, {todo: textoTarea}] )
        setTextoTarea("")
    }

    function teclaPresionada(event) {
        const valor = event.target.value
        setTextoTarea(valor)
        inputRef.current.style.backgroundColor = "black"
        setErrorMessage('')
    }

    return (
        <>
            <h1>Lista de productos</h1>

            <ul>
                {listaTareas.map((tarea, index) => {
                    return(
                        <li>{tarea.todo}</li>
                    )
                })}
            </ul>
            <input ref={inputRef} value={textoTarea} onInput={teclaPresionada}  type='text' placeholder='Escriba la tarea' />
            <p>{errorMessage}</p>
            <button onClick={clickAgregar}  >Agregar</button>
        </>
    )
}

export default ListaTareas;