import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
//import React from 'react'
//React.useState

function DetalleTarea() {
    const { id } = useParams();
    const [tarea, setTarea] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTimeout(() => {
                    setTarea(data);
                }, 2000);
            });
    }, [id]);

    return (
        <>
            {tarea?.id ? (
                <div>
                    <h1>Tarea #{id}</h1>
                    <p>{tarea.todo}</p>
                    <p>{tarea.completed ? 'Completada' : 'Pendiente'}</p>
                    <Link to="/lista">Regresar</Link>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </>
    );
}

export default DetalleTarea;
