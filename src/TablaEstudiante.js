import React, { useState } from 'react';
import './App.css'

function TablaEstudiante() {
    // Estado para el color de fondo de la celda
    const [colorFondo, setColorFondo] = useState('white');

    // Datos del estudiante
    const estudiante = 'Choque Sillo Ronald';

    // Función para cambiar el fondo a rojo
    const cambiarFondoRojo = () => {
        setColorFondo('red');
    };

    // Función para cambiar el fondo a verde
    const cambiarFondoVerde = () => {
        setColorFondo('green');
    };

    return (
        <table className={"m-5"}>
            <tbody>
            <tr>
                <td className={"p-9"}>
                    <button onClick={cambiarFondoRojo}>Cambiar Fondo Rojo</button>
                    <br/>
                    <button onClick={cambiarFondoVerde}>Cambiar Fondo Verde</button>
                </td>
                <td style={{ backgroundColor: colorFondo }}>{estudiante}</td>
            </tr>
            </tbody>
        </table>
    );
}

export default TablaEstudiante;
