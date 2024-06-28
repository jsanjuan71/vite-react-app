import { useState, useEffect } from 'react';

function useLocalStorage2(valorInicial, clave) {
    const [almacenamiento, setAlmacenamiento] = useState(valorInicial);

    useEffect(function () {
        // obtener el valor del local storage
        const storage = localStorage.getItem(clave);
        // si el valor es nulo, almacenar el valor inicial
        if (storage === null) {
            localStorage.setItem(clave, JSON.stringify(valorInicial));
        } else {
            // si el valor no es nulo, almacenar el valor del local storage
            const datosAlmacenados = JSON.parse(storage);
            // cambiar el estado para que se actualice el componente
            setAlmacenamiento(datosAlmacenados);
        }
    }, []);

    // ejecutar cada vez que cambie el almacenamiento
    useEffect(() => {
        // es solo de ejemplo pero aqui se podria hacer algo con el almacenamiento
        console.log('almacenamiento cambio');
    }, [almacenamiento]);

    // funcion para agregar un elemento al almacenamiento
    function agregar(elemento) {
        // actualizar el local storage con el nuevo elemento
        localStorage.setItem(clave, JSON.stringify([...almacenamiento, elemento]));
        // actualizar el estado del almacenamiento
        setAlmacenamiento([...almacenamiento, elemento]);
    }

    function reemplazar(nuevoValor) {
        localStorage.setItem(clave, JSON.stringify(nuevoValor));
        setAlmacenamiento(nuevoValor);
    }

    // retornar el almacenamiento y la funcion agregar
    return { almacenamiento, agregar, reemplazar };
}

export default useLocalStorage2;
