import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa los componentes de enrutamiento
import MenuVertical from './MenuVertical';

import Inicio from './components/Inicio'; // Crea estos componentes

import InglesI from './components/primer-tetra/ingles-I'; // Crea estos componentes
import Algebra from './components/primer-tetra/algebra'; // Crea estos componentes
import Geometria from './components/primer-tetra/geometria-analitica'; // Crea estos componentes
import FisicaI from './components/primer-tetra/fisica-I'; // Crea estos componentes
import Programacionestructurada from './components/primer-tetra/programacion-estructurada'; // Crea estos componentes
import Arteycultura from './components/primer-tetra/arte-y-cultura'; // Crea estos componentes

import Calculodiferencial from './components/segundo-tetra/calculo-diferencial';
import FisicaII from './components/segundo-tetra/fisica-II';
import Fundamentosdelaprogramacion from './components/segundo-tetra/fundamentos-de-la-programacion';
import InglesII from './components/segundo-tetra/ingles-II';
import Modelaciondedatos from './components/segundo-tetra/modelacion-de-datos';
import Sistemasoperativos from './components/segundo-tetra/sistemas-operativos';

import Basesdedatosrelacionales from './components/tercer-tetra/bases-de-datos-relacionales';
import Calculointegral from './components/tercer-tetra/calculo-integral';
import Circuitosanalogosydigitales from './components/tercer-tetra/circuitos-analogos-y-digitales';
import Inglesenfocadoasistemas from './components/tercer-tetra/ingles-enfocado-a-sistemas';
import Probabilidadyestadistica from './components/tercer-tetra/probabilidad-y-estadistica';
import Programacionorientadaaobjetos from './components/tercer-tetra/programacion-orientada-a-objetos';

import Basesdedatosnorelacionales from './components/cuarto-tetra/bases-de-datos-no-relacionales';
import Desarrollosustentable from './components/cuarto-tetra/desarrollo-sustentable';
import Estadisticamultivariada from './components/cuarto-tetra/estadistica-multivariada';
import Lenguajeensamblador from './components/cuarto-tetra/lenguaje-ensamblador';
import Seguridadinformatica from './components/cuarto-tetra/seguridad-informatica';
import Señalesysistemas from './components/cuarto-tetra/señales-y-sistemas';


import Ciberseguridadenredes from './components/quinto-tetra/ciberseguridad-en-redes';
import Diseñodeinterfaces from './components/quinto-tetra/diseño-de-interfaces';
import Estadisticainferencial from './components/quinto-tetra/estadistica-inferencial';
import Fundamentosderedes from './components/quinto-tetra/fundamentos-de-redes';
import Globalizacion from './components/quinto-tetra/globalizacion';
import Optimizacionlineal from './components/quinto-tetra/optimizacion-lineal';


import Desarrolloweb from './components/sexto-tetra/desarrollo-web';
import Etica from './components/sexto-tetra/etica';
import Investigaciondeoperaciones from './components/sexto-tetra/investigacion-de-operaciones';
import Mantenimientodesistemasdeinformacion from './components/sexto-tetra/mantenimiento-de-sistemas-de-informacion';
import Principiosdelainteligenciaartificial from './components/sexto-tetra/principios-de-la-inteligencia-artificial';
import Sistemasclienteservidor from './components/sexto-tetra/sistemas-cliente-servidor';

import Adminsitraciondecentrosdedatos from './components/septimo-tetra/administracion-de-centros-de-datos';
import Aprendizajemaquina from './components/septimo-tetra/aprendizaje-maquina';
import Liderazgoytomadedecisiones from './components/septimo-tetra/liderazgo-y-toma-de-decisiones';
import Modelosdecalidaddesoftware from './components/septimo-tetra/modelos-de-calidad-de-software';
import Programacionweb from './components/septimo-tetra/programacion-web';
import Servidoresdelanube from './components/septimo-tetra/servidores-de-la-nube';


import Administraciondeproyectosdesoftware from './components/octavo-tetra/administracion-de-proyectos-de-software';
import Basededatosagranescala from './components/octavo-tetra/base-de-datos-a-gran-escala';
import Calidaddelosservicioscomputacionales from './components/octavo-tetra/calidad-de-los-servicios-computacionales';
import Ingenieriadedispositivosmoviles from './components/octavo-tetra/ingenieria-de-dispositivos-moviles';
import Modeladoysimulaciondesistemas from './components/octavo-tetra/modelado-y-simulacion-de-sistemas';
import Propiedadintelectual from './components/octavo-tetra/propiedad-intelectual';


import Calidadyconsultoriaeninformatica from './components/noveno-tetra/calidad-y-consultoria-en-informatica';
import Emprendimiento from './components/noveno-tetra/emprendimiento';
import Internetdelascosas from './components/noveno-tetra/internet-de-las-cosas';
import Mineriadedatoseinteligenciadenegocios from './components/noveno-tetra/mineria-de-datos-e-inteligencia-de-negocios';
import Unidadesdeinformaticaenlasorganizaciones from './components/noveno-tetra/unidades-de-informatica-en-las-organizaciones';
import Sistemasadaptativos from './components/noveno-tetra/sistemas-adaptativos';


import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      id: 0,
      label: 'Inicio', path: '/', component: Inicio, // Agrega 'path' y 'component'
    },
    {
      id: 1,
      label: 'Primer tetramestre',
      submenu: [
        { id: 1.1, label: 'Álgebra', path: '/primer-tetra/algebra', component: Algebra }, // Agrega 'path' y 'component'
        { id: 1.2, label: 'Geometría analítica', path: '/primer-tetra/geometria-analitica', component: Geometria }, // Agrega 'path' y 'component'
        { id: 1.3, label: 'Física I', path: '/primer-tetra/fisica-I', component: FisicaI }, // Agrega 'path' y 'component'
        { id: 1.4, label: 'Programación estructurada', path: '/primer-tetra/programacion-estructurada', component: Programacionestructurada }, // Agrega 'path' y 'component'
        { id: 1.5, label: 'Arte y cultura', path: '/primer-tetra/arte-y-cultura', component: Arteycultura }, // Agrega 'path' y 'component'
        { id: 1.6, label: 'Inglés I', path: '/primer-tetra/ingles-I', component: InglesI }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 2,
      label: 'Segundo tetramestre',
      submenu: [
        { id: 2.1, label: 'Cálculo diferencial', path: '/segundo-tetra/calculo-diferencial', component: Calculodiferencial }, // Agrega 'path' y 'component'
        { id: 2.2, label: 'Física II', path: '/segundo-tetra/fisica-II', component: FisicaII }, // Agrega 'path' y 'component'
        { id: 2.3, label: 'Fundamentos de la programación', path: '/segundo-tetra/fundamentos-de-la-programacion', component: Fundamentosdelaprogramacion }, // Agrega 'path' y 'component'
        { id: 2.4, label: 'Sistemas operativos', path: '/segundo-tetra/sistemas-operativos', component: Sistemasoperativos }, // Agrega 'path' y 'component'
        { id: 2.5, label: 'Modelación de datos', path: '/segundo-tetra/modelacion-de-datos', component: Modelaciondedatos }, // Agrega 'path' y 'component'
        { id: 2.6, label: 'Inglés II', path: '/segundo-tetra/ingles-II', component: InglesII }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 3,
      label: 'Tercer tetramestre',
      submenu: [
        { id: 3.1, label: 'Cálculo integral', path: '/tercer-tetra/calculo-integral', component: Calculointegral }, // Agrega 'path' y 'component'
        { id: 3.2, label: 'Probabilidad y estadística', path: '/tercer-tetra/probabilidad-y-estadistica', component: Probabilidadyestadistica }, // Agrega 'path' y 'component'
        { id: 3.3, label: 'Programación orientada a objetos', path: '/tercer-tetra/programacion-orientada-a-objetos', component: Programacionorientadaaobjetos }, // Agrega 'path' y 'component'
        { id: 3.4, label: 'Bases de datos relacionales', path: '/tercer-tetra/bases-de-datos-relacionales', component: Basesdedatosrelacionales }, // Agrega 'path' y 'component'
        { id: 3.5, label: 'Circuitos análogos y digitales', path: '/tercer-tetra/circuitos-analogos-y-digitales', component: Circuitosanalogosydigitales }, // Agrega 'path' y 'component'
        { id: 3.6, label: 'Inglés enfocado a sistemas', path: 'tercer-tetra/ingles-enfocado-a-sistemas/', component: Inglesenfocadoasistemas }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 4,
      label: 'Cuarto tetramestre',
      submenu: [
        { id: 4.1, label: 'Estadística multivariada', path: '/cuarto-tetra/estadistica-multivariada', component: Estadisticamultivariada }, // Agrega 'path' y 'component'
        { id: 4.2, label: 'Lenguaje ensamblador', path: '/cuarto-tetra/lenguaje-ensamblador', component: Lenguajeensamblador }, // Agrega 'path' y 'component'
        { id: 4.3, label: 'Bases de datos no relacionales', path: '/cuarto-tetra/bases-de-datos-no-relacionales', component: Basesdedatosnorelacionales }, // Agrega 'path' y 'component'
        { id: 4.4, label: 'Señales y sistemas', path: '/cuarto-tetra/señales-y-sistemas', component: Señalesysistemas }, // Agrega 'path' y 'component'
        { id: 4.5, label: 'Seguridad informática', path: '/cuarto-tetra/seguridad-informatica', component: Seguridadinformatica }, // Agrega 'path' y 'component'
        { id: 4.6, label: 'Desarrollo sustentable', path: '/cuarto-tetra/desarrollo-sustentable', component: Desarrollosustentable }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 5,
      label: 'Quinto tetramestre',
      submenu: [
        { id: 5.1, label: 'Optimización lineal', path: '/quinto-tetra/optimizacion-lineal', component: Optimizacionlineal }, // Agrega 'path' y 'component'
        { id: 5.2, label: 'Estadístia inferencial', path: '/quinto-tetra/estadistica-inferencial', component: Estadisticainferencial }, // Agrega 'path' y 'component'
        { id: 5.3, label: 'Diseño de interfaces', path: '/quinto-tetra/diseño-de-interfaces', component: Diseñodeinterfaces }, // Agrega 'path' y 'component'
        { id: 5.4, label: 'Fundamentos de redes', path: '/quinto-tetra/fundamentos-de-redes', component: Fundamentosderedes }, // Agrega 'path' y 'component'
        { id: 5.5, label: 'Ciberseguridad en redes', path: '/quinto-tetra/ciberseguridad-en-redes', component: Ciberseguridadenredes }, // Agrega 'path' y 'component'
        { id: 5.6, label: 'Globalización', path: '/quinto-tetra/globalizacion', component: Globalizacion }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 6,
      label: 'Sexto tetramestre',
      submenu: [
        { id: 6.1, label: 'Investigación de operaciones', path: '/sexto-tetra/investigacion-de-operaciones', component: Investigaciondeoperaciones }, // Agrega 'path' y 'component'
        { id: 6.2, label: 'Principios de la inteligencia artificial', path: '/sexto-tetra/principios-de-la-inteligencia-artificial', component: Principiosdelainteligenciaartificial }, // Agrega 'path' y 'component'
        { id: 6.3, label: 'Desarrollo web', path: '/sexto-tetra/desarrollo-web', component: Desarrolloweb }, // Agrega 'path' y 'component'
        { id: 6.4, label: 'Sistemas cliente-servidor', path: '/sexto-tetra/sistemas-cliente-servidor', component: Sistemasclienteservidor }, // Agrega 'path' y 'component'
        { id: 6.5, label: 'Mantenimiento de sistemas de información', path: '/sexto-tetra/mantenimiento-de-sistemas-de-informacion', component: Mantenimientodesistemasdeinformacion }, // Agrega 'path' y 'component'
        { id: 6.6, label: 'Ética', path: '/sexto-tetra/etica', component: Etica }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 7,
      label: 'Septimo tetramestre',
      submenu: [
        { id: 7.1, label: 'Aprendizaje máquina', path: '/septimo-tetra/aprendizaje-maquina', component: Aprendizajemaquina }, // Agrega 'path' y 'component'
        { id: 7.2, label: 'Programación web', path: '/septimo-tetra/programacion-web', component: Programacionweb }, // Agrega 'path' y 'component'
        { id: 7.3, label: 'Modelos de calidad de software', path: '/septimo-tetra/modelos-de-calidad-de-software', component: Modelosdecalidaddesoftware }, // Agrega 'path' y 'component'
        { id: 7.4, label: 'Servidores de la nube', path: '/septimo-tetra/servidores-de-la-nube', component: Servidoresdelanube }, // Agrega 'path' y 'componentz'
        { id: 7.5, label: 'Administración de centros de datos', path: '/septimo-tetra/administracion-de-centros-de-datos', component: Adminsitraciondecentrosdedatos }, // Agrega 'path' y 'component'
        { id: 7.6, label: 'Liderazgoy toma de decisiones', path: '/septimo-tetra/liderazgo-y-toma-de-decisiones', component: Liderazgoytomadedecisiones }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 8,
      label: 'Octavo tetramestre',
      submenu: [
        { id: 8.1, label: 'Modelado y simulacion de sistemas', path: '/octavo-tetra/modelado-y-simulacion-de-sistemas', component: Modeladoysimulaciondesistemas }, // Agrega 'path' y 'component'
        { id: 8.2, label: 'Ingeniería de dispositivos móviles', path: '/octavo-tetra/ingenieria-de-dispositivos-moviles', component: Ingenieriadedispositivosmoviles }, // Agrega 'path' y 'component'
        { id: 8.3, label: 'Administración de proyectos de software', path: '/octavo-tetra/administracion-de-proyectos-de-software', component: Administraciondeproyectosdesoftware }, // Agrega 'path' y 'component'
        { id: 8.4, label: 'Calidad de los servicios computacionales', path: '/octavo-tetra/calidad-de-los-servicios-computacionales', component: Calidaddelosservicioscomputacionales }, // Agrega 'path' y 'component'
        { id: 8.5, label: 'Base de datos a gran escala', path: '/octavo-tetra/base-de-datos-a-gran-escala', component: Basededatosagranescala }, // Agrega 'path' y 'component'
        { id: 8.6, label: 'Propiedad intelectual', path: '/octavo-tetra/propiedad-intelectual', component: Propiedadintelectual }, // Agrega 'path' y 'component'
      ],
    },
    {
      id: 9,
      label: 'Noveno tetramestre',
      submenu: [
        { id: 9.1, label: 'Sistemas adaptativos', path: '/noveno-tetra/sistemas-adaptativos', component: Sistemasadaptativos }, // Agrega 'path' y 'component'
        { id: 9.2, label: 'Minería de datos e inteligencia de negocios', path: '/noveno-tetra/mineria-de-datos-e-inteligencia-de-negocios', component: Mineriadedatoseinteligenciadenegocios }, // Agrega 'path' y 'component'
        { id: 9.3, label: 'Internet de las cosas', path: '/noveno-tetra/internet-de-las-cosas', component: Internetdelascosas }, // Agrega 'path' y 'component'
        { id: 9.4, label: 'Unidades de informática en las organizaciones', path: '/noveno-tetra/unidades-de-informatica-en-las-organizaciones', component: Unidadesdeinformaticaenlasorganizaciones }, // Agrega 'path' y 'component'
        { id: 9.5, label: 'Calidad y consultoría en informática', path: '/noveno-tetra/calidad-y-consultoria-en-informatica', component: Calidadyconsultoriaeninformatica }, // Agrega 'path' y 'component'
        { id: 9.6, label: 'Emprendimiento', path: '/noveno-tetra/emprendimiento', component: Emprendimiento }, // Agrega 'path' y 'component'
      ],
    },

  ];



  return (
    <Router>
      <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
        {/* Botón de hamburguesa para móviles */}
        <button 
          className="menu-toggle-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
        
        <aside>
          <MenuVertical 
            items={menuItems} 
            onItemClick={() => setIsMenuOpen(false)} 
          />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} /> {/* Define rutas para cada sección */}

            <Route path="/primer-tetra/algebra" element={<Algebra />} />
            <Route path="/primer-tetra/arte-y-cultura" element={<Arteycultura />} />
            <Route path="/primer-tetra/fisica-I" element={<FisicaI />} />
            <Route path="/primer-tetra/geometria-analitica" element={<Geometria />} />
            <Route path="/primer-tetra/ingles-I" element={<InglesI />} />
            <Route path="/primer-tetra/programacion-estructurada" element={<Programacionestructurada />} />

            <Route path="/segundo-tetra/calculo-diferencial" element={<Calculodiferencial />} />
            <Route path="/segundo-tetra/fisica-II" element={<FisicaII />} />
            <Route path="/segundo-tetra/fundamentos-de-la-programacion" element={<Fundamentosdelaprogramacion />} />
            <Route path="/segundo-tetra/ingles-II" element={<InglesII />} />
            <Route path="/segundo-tetra/modelacion-de-datos" element={<Modelaciondedatos />} />
            <Route path="/segundo-tetra/sistemas-operativos" element={<Sistemasoperativos />} />

            <Route path="/tercer-tetra/bases-de-datos-relacionales" element={<Basesdedatosrelacionales />} />
            <Route path="/tercer-tetra/calculo-integral" element={<Calculointegral />} />
            <Route path="/tercer-tetra/circuitos-analogos-y-digitales" element={<Circuitosanalogosydigitales />} />
            <Route path="/tercer-tetra/ingles-enfocado-a-sistemas" element={<Inglesenfocadoasistemas />} />
            <Route path="/tercer-tetra/probabilidad-y-estadistica" element={<Probabilidadyestadistica />} />
            <Route path="/tercer-tetra/programacion-orientada-a-objetos" element={<Programacionorientadaaobjetos />} />

            <Route path="/cuarto-tetra/bases-de-datos-no-relacionales" element={<Basesdedatosnorelacionales />} />
            <Route path="/cuarto-tetra/desarrollo-sustentable" element={<Desarrollosustentable />} />
            <Route path="/cuarto-tetra/estadistica-multivariada" element={<Estadisticamultivariada />} />
            <Route path="/cuarto-tetra/lenguaje-ensamblador" element={<Lenguajeensamblador />} />
            <Route path="/cuarto-tetra/seguridad-informatica" element={<Seguridadinformatica />} />
            <Route path="/cuarto-tetra/señales-y-sistemas" element={<Señalesysistemas />} />

            <Route path="/quinto-tetra/ciberseguridad-en-redes" element={<Ciberseguridadenredes />} />
            <Route path="/quinto-tetra/diseño-de-interfaces" element={<Diseñodeinterfaces />} />
            <Route path="/quinto-tetra/estadistica-inferencial" element={<Estadisticainferencial />} />
            <Route path="/quinto-tetra/fundamentos-de-redes" element={<Fundamentosderedes />} />
            <Route path="/quinto-tetra/globalizacion" element={<Globalizacion />} />
            <Route path="/quinto-tetra/optimizacion-lineal" element={<Optimizacionlineal />} />

            <Route path="/sexto-tetra/desarrollo-web" element={<Desarrolloweb />} />
            <Route path="/sexto-tetra/etica" element={<Etica />} />
            <Route path="/sexto-tetra/investigacion-de-operaciones" element={<Investigaciondeoperaciones />} />
            <Route path="/sexto-tetra/mantenimiento-de-sistemas-de-informacion" element={<Mantenimientodesistemasdeinformacion />} />
            <Route path="/sexto-tetra/principios-de-la-inteligencia-artificial" element={<Principiosdelainteligenciaartificial />} />
            <Route path="/sexto-tetra/sistemas-cliente-servidor" element={<Sistemasclienteservidor />} />

            <Route path="/septimo-tetra/administracion-de-centros-de-datos" element={<Adminsitraciondecentrosdedatos />} />
            <Route path="/septimo-tetra/aprendizaje-maquina" element={<Aprendizajemaquina />} />
            <Route path="/septimo-tetra/liderazgo-y-toma-de-decisiones" element={<Liderazgoytomadedecisiones />} />
            <Route path="/septimo-tetra/modelos-de-calidad-de-software" element={<Modelosdecalidaddesoftware />} />
            <Route path="/septimo-tetra/programacion-web" element={<Programacionweb />} />
            <Route path="/septimo-tetra/servidores-de-la-nube" element={<Servidoresdelanube />} />

            <Route path="/octavo-tetra/administracion-de-proyectos-de-software" element={<Administraciondeproyectosdesoftware />} />
            <Route path="/octavo-tetra/base-de-datos-a-gran-escala" element={<Basededatosagranescala />} />
            <Route path="/octavo-tetra/calidad-de-los-servicios-computacionales" element={<Calidaddelosservicioscomputacionales />} />
            <Route path="/octavo-tetra/ingenieria-de-dispositivos-moviles" element={<Ingenieriadedispositivosmoviles />} />
            <Route path="/octavo-tetra/modelado-y-simulacion-de-sistemas" element={<Modeladoysimulaciondesistemas />} />
            <Route path="/octavo-tetra/propiedad-intelectual" element={<Propiedadintelectual />} />

            <Route path="/noveno-tetra/calidad-y-consultoria-en-informatica" element={<Calidadyconsultoriaeninformatica />} />
            <Route path="/noveno-tetra/emprendimiento" element={<Emprendimiento />} />
            <Route path="/noveno-tetra/internet-de-las-cosas" element={<Internetdelascosas />} />
            <Route path="/noveno-tetra/mineria-de-datos-e-inteligencia-de-negocios" element={<Mineriadedatoseinteligenciadenegocios />} />
            <Route path="/noveno-tetra/sistemas-adaptativos" element={<Sistemasadaptativos />} />
            <Route path="/noveno-tetra/unidades-de-informatica-en-las-organizaciones" element={<Unidadesdeinformaticaenlasorganizaciones />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;