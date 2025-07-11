import React, { useState } from 'react';
import '../../styles/styles.css';


const FisicaI = () => {
    const [openUnit, setOpenUnit] = useState(null);

    const handleToggle = (unitNumber) => (e) => {
        // Solo actualizamos el estado si el elemento está ganando foco (abriéndose)
        if (e.target.open) {
            setOpenUnit(unitNumber);
        }
    };

    return (
        <div class="contenido">
            <h1>Fisica I</h1>

            <details
                open={openUnit === 1}
                onToggle={handleToggle(1)}
            >
                <summary>Unidad I.Tiro parabólico</summary>
                <div class="content">
                    
                </div>
            </details>

            <details
                open={openUnit === 2}
                onToggle={handleToggle(2)}
            >
                <summary>Unidad II. Movimiento rotacional</summary>
            
                <div class="content"></div>

            </details>

            <details
                open={openUnit === 3}
                onToggle={handleToggle(3)}
            >
                <summary>Unidad III. Conservación de la energía</summary>
                
                <div class="content"></div>
            </details>

            <details
                open={openUnit === 4}
                onToggle={handleToggle(4)}
            >
                <summary>Unidad IV. Principio de Arquímedes</summary>
                
                <div class="content"></div>
            </details>
        </div>
    );
};

export default FisicaI;