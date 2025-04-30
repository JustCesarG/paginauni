import React, { useState } from 'react';
import '../../styles/styles.css';


const Liderazgoytomadecisiones = () => {
    const [openUnit, setOpenUnit] = useState(null);

    const handleToggle = (unitNumber) => (e) => {
        // Solo actualizamos el estado si el elemento está ganando foco (abriéndose)
        if (e.target.open) {
            setOpenUnit(unitNumber);
        }
    };

    return (
        <div class="contenido">
            <h1>Liderazgo y toma de decisiones</h1>

            <details
                open={openUnit === 1}
                onToggle={handleToggle(1)}
            >
                <summary>Unidad I.</summary>
                <div class="content">
                    
                </div>
            </details>

            <details
                open={openUnit === 2}
                onToggle={handleToggle(2)}
            >
                <summary>Unidad II.</summary>
            
                <div class="content"></div>

            </details>

            <details
                open={openUnit === 3}
                onToggle={handleToggle(3)}
            >
                <summary>Unidad III.</summary>
                
                <div class="content"></div>
            </details>

            <details
                open={openUnit === 4}
                onToggle={handleToggle(4)}
            >
                <summary>Unidad IV.</summary>
                
                <div class="content"></div>
            </details>
        </div>
    );
};

export default Liderazgoytomadecisiones;