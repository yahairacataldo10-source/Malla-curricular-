document.addEventListener('DOMContentLoaded', function () {

    // --- BASE DE DATOS DE LA MALLA CURRICULAR ---
    // Aquí defines todos los ramos de la carrera.
    // 'id': Un identificador único para cada ramo. MUY IMPORTANTE.
    // 'nombre': El nombre completo del ramo.
    // 'semestre': El número del semestre al que pertenece.
    // 'requisitos': Un array con los 'id' de los ramos que se deben aprobar ANTES de poder tomar este.
    //               Si no tiene requisitos, el array debe estar vacío [].
    //
    // !!!!! IMPORTANTE: HE AÑADIDO REQUISITOS DE EJEMPLO. !!!!!
    // !!!!! DEBES REVISARLOS Y AJUSTARLOS A TU CARRERA REAL. !!!!!
    
    const cursos = [
        // Semestre 1
        { id: 'S1-EDH', nombre: 'Educación y Desarrollo Humano', semestre: 1, requisitos: [] },
        { id: 'S1-FFF', nombre: 'Fundamentos Filosóficos y Socio Antropológicos de la Educación', semestre: 1, requisitos: [] },
        { id: 'S1-AAU', nombre: 'Acceso Universal para el Aprendizaje', semestre: 1, requisitos: [] },
        { id: 'S1-RED', nombre: 'Rol del Educador Diferencial y Perspectivas de la Educación Inclusiva', semestre: 1, requisitos: [] },
        { id: 'S1-FGV1', nombre: 'Formación General Valórica I', semestre: 1, requisitos: [] },

        // Semestre 2
        { id: 'S2-ID', nombre: 'Inclusión y Diversidad', semestre: 2, requisitos: ['S1-RED'] },
        { id: 'S2-DHD', nombre: 'Desarrollo Humano y Diversidad Funcional', semestre: 2, requisitos: ['S1-EDH'] },
        { id: 'S2-DAI', nombre: 'Diseño de Aprendizajes Inclusivos para la Educación Diferencial', semestre: 2, requisitos: ['S1-AAU'] },
        { id: 'S2-P1', nombre: 'Práctica 1: Para la Mediación y Acercamiento al Sistema Educativo', semestre: 2, requisitos: ['S1-RED'] },
        { id: 'S2-FGE1', nombre: 'Formación General Electiva I', semestre: 2, requisitos: [] },

        // Semestre 3
        { id: 'S3-FC', nombre: 'Fundamentos del Curriculum', semestre: 3, requisitos: ['S2-DAI'] },
        { id: 'S3-EAA', nombre: 'Evaluación Auténtica de los Aprendizajes', semestre: 3, requisitos: ['S2-DAI'] },
        { id: 'S3-DLH', nombre: 'Desarrollo del Lenguaje y Habilidades Comunicativas', semestre: 3, requisitos: ['S2-DHD'] },
        { id: 'S3-EAT', nombre: 'Entornos Educativos y Tecnologías Asistivas', semestre: 3, requisitos: [] },
        { id: 'S3-CTA', nombre: 'Contextos Transformadores para el Aprendizaje', semestre: 3, requisitos: [] },
        { id: 'S3-P2', nombre: 'Práctica 2: Para la Mediación Diagnóstica de Contexto en Educación Diferencial', semestre: 3, requisitos: ['S2-P1'] },
        { id: 'S3-FGG1', nombre: 'Formación General Globalización I', semestre: 3, requisitos: [] },

        // Semestre 4
        { id: 'S4-BNE', nombre: 'Bases Neuropsicológicas de la Educación', semestre: 4, requisitos: ['S3-DLH'] },
        { id: 'S4-EMD', nombre: 'Evaluación Multidimensional y Dinámica', semestre: 4, requisitos: ['S3-EAA'] },
        { id: 'S4-DPM', nombre: 'Desarrollo del Pensamiento Matemático y Científico', semestre: 4, requisitos: ['S3-DLH'] },
        { id: 'S4-DEC', nombre: 'Dimensiones para el Desarrollo Emocional y Cognitivo', semestre: 4, requisitos: [] },
        { id: 'S4-P3', nombre: 'Práctica 3: Para la Mediación Colaborativa', semestre: 4, requisitos: ['S3-P2'] },
        { id: 'S4-FGG2', nombre: 'Formación General Globalización II', semestre: 4, requisitos: ['S3-FGG1'] },
        
        // Semestre 5
        { id: 'S5-ILP', nombre: 'Innovación y Liderazgo Pedagógico en el Aula', semestre: 5, requisitos: ['S4-P3'] },
        { id: 'S5-PEE', nombre: 'Planificación de las Experiencias Educativas Inclusivas', semestre: 5, requisitos: ['S4-EMD'] },
        { id: 'S5-DPS', nombre: 'Potencialidades del Desarrollo Psicomotor y Sensorial', semestre: 5, requisitos: [] },
        { id: 'S5-CTA2', nombre: 'Cultura, Territorios y Aprendizaje', semestre: 5, requisitos: [] },
        { id: 'S5-P4', nombre: 'Práctica 4: Para la Mediación Didáctica y Aprendizaje', semestre: 5, requisitos: ['S4-P3'] },
        { id: 'S5-FGG3', nombre: 'Formación General Globalización III', semestre: 5, requisitos: ['S4-FGG2'] },

        // Semestre 6
        { id: 'S6-CDE', nombre: 'Convivencia y Diversidad Escolar', semestre: 6, requisitos: [] },
        { id: 'S6-EPA', nombre: 'Evaluación Psicopedagógica para el Aprendizaje y Diversidad', semestre: 6, requisitos: ['S5-PEE'] },
        { id: 'S6-FPE1', nombre: 'Formación Profesional Electiva I', semestre: 6, requisitos: [] },
        { id: 'S6-MTC', nombre: 'Mediación para la Transformación Cognitiva', semestre: 6, requisitos: ['S5-ILP'] },
        { id: 'S6-P5', nombre: 'Práctica 5: Para la Mediación del Aprendizaje y Diversidad', semestre: 6, requisitos: ['S5-P4'] },
        { id: 'S6-FGV2', nombre: 'Formación General Valórica II', semestre: 6, requisitos: ['S1-FGV1'] },
        
        // Semestre 7
        { id: 'S7-MIE', nombre: 'Metodología de la Investigación en Educación', semestre: 7, requisitos: ['S6-EPA'] },
        { id: 'S7-PAJ', nombre: 'Propensión al Aprender de Jóvenes y Adultos con Diversidad Funcional', semestre: 7, requisitos: ['S6-MTC'] },
        { id: 'S7-PC', nombre: 'Proyecto Comunitario', semestre: 7, requisitos: [] },
        { id: 'S7-RAM', nombre: 'Rutas para el Aprendizaje y Mapas Cognitivos', semestre: 7, requisitos: ['S6-MTC'] },
        { id: 'S7-P6', nombre: 'Práctica 6: Para la Mediación y Transformación de la Cultura Escolar', semestre: 7, requisitos: ['S6-P5'] },
        { id: 'S7-FGE2', nombre: 'Formación General Electiva II', semestre: 7, requisitos: [] },

        // Semestre 8
        { id: 'S8-PIM', nombre: 'Proyectos de Investigación para la Mejora Educativa', semestre: 8, requisitos: ['S7-MIE'] },
        { id: 'S8-GRA', nombre: 'Gestión de Redes de Apoyo en Contextos Diversos', semestre: 8, requisitos: ['S7-PC'] },
        { id: 'S8-FPE2', nombre: 'Formación Profesional Electiva II', semestre: 8, requisitos: [] },
        { id: 'S8-DPM2', nombre: 'Diseño de Propuestas Mediadoras para el Desarrollo Emocional y Cognitivo', semestre: 8, requisitos: ['S7-RAM'] },
        { id: 'S8-P7', nombre: 'Práctica 7: Para la Mediación Interdisciplinar', semestre: 8, requisitos: ['S7-P6'] },
        { id: 'S8-FGV3', nombre: 'Formación General Valórica III', semestre: 8, requisitos: ['S6-FGV2'] },

        // Semestre 9
        { id: 'S9-SG1', nombre: 'Seminario de Grado 1', semestre: 9, requisitos: ['S8-PIM'] },
        { id: 'S9-PP1', nombre: 'Práctica Profesional para la Mediación Emocional y Cognitiva en Educación Diferencial', semestre: 9, requisitos: ['S8-P7'] },
        { id: 'S9-FGV4', nombre: 'Formación General Valórica IV', semestre: 9, requisitos: ['S8-FGV3'] },
        
        // Semestre 10
        { id: 'S10-SG2', nombre: 'Seminario de Grado 2', semestre: 10, requisitos: ['S9-SG1'] },
        { id: 'S10-PP2', nombre: 'Práctica Profesional en Educación Diferencial', semestre: 10, requisitos: ['S9-PP1'] }
    ];

    const container = document.getElementById('malla-curricular');
    const notificacion = document.getElementById('notificacion');
    const notificacionMensaje = document.getElementById('notificacion-mensaje');
    const notificacionCerrar = document.getElementById('notificacion-cerrar');

    // Carga los ramos aprobados desde el localStorage del navegador
    let aprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

    // --- FUNCIÓN PARA GENERAR LA MALLA EN HTML ---
    function generarMalla() {
        // Limpia el contenedor antes de dibujar
        container.innerHTML = '';
        
        // Obtiene el número total de semestres
        const totalSemestres = Math.max(...cursos.map(c => c.semestre));
        
        // Crea una columna por cada semestre
        for (let i = 1; i <= totalSemestres; i++) {
            const semestreColumna = document.createElement('div');
            semestreColumna.className = 'semestre-columna';
            semestreColumna.innerHTML = `<h2>Semestre ${i}</h2>`;
            
            // Filtra y añade los ramos de este semestre a la columna
            cursos.filter(curso => curso.semestre === i).forEach(curso => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.id = curso.id;
                ramoDiv.innerText = curso.nombre;
                semestreColumna.appendChild(ramoDiv);
            });
            
            container.appendChild(semestreColumna);
        }
        actualizarEstadoVisual();
    }

    // --- FUNCIÓN PARA ACTUALIZAR EL ESTADO VISUAL DE TODOS LOS RAMOS ---
    function actualizarEstadoVisual() {
        cursos.forEach(curso => {
            const el = document.getElementById(curso.id);
            if (!el) return;

            // Primero, reinicia las clases de estado
            el.classList.remove('aprobado', 'bloqueado');

            // Comprueba si el ramo está en la lista de aprobados
            if (aprobados.includes(curso.id)) {
                el.classList.add('aprobado');
            } else {
                // Si no está aprobado, comprueba si tiene los requisitos cumplidos
                const requisitosCumplidos = curso.requisitos.every(reqId => aprobados.includes(reqId));
                if (!requisitosCumplidos) {
                    el.classList.add('bloqueado');
                }
            }
        });
    }
    
    // --- MANEJO DE CLIC EN UN RAMO ---
    container.addEventListener('click', function(e) {
        if (e.target.classList.contains('ramo')) {
            const idRamo = e.target.id;
            
            // Si ya está aprobado, no hacer nada
            if (aprobados.includes(idRamo)) {
                return;
            }

            // Si está bloqueado, mostrar notificación
            if (e.target.classList.contains('bloqueado')) {
                const curso = cursos.find(c => c.id === idRamo);
                const requisitosFaltantes = curso.requisitos.filter(reqId => !aprobados.includes(reqId));
                
                // Busca los nombres de los ramos faltantes
                const nombresFaltantes = requisitosFaltantes.map(reqId => {
                    return cursos.find(c => c.id === reqId).nombre;
                });

                mostrarNotificacion(`Para tomar este ramo, primero debes aprobar: <br>• ${nombresFaltantes.join('<br>• ')}`);
                return;
            }

            // Si no está aprobado ni bloqueado, se aprueba
            aprobados.push(idRamo);
            guardarProgreso();
            actualizarEstadoVisual();
        }
    });

    // --- GUARDAR PROGRESO EN LOCALSTORAGE ---
    function guardarProgreso() {
        localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
    }
    
    // --- FUNCIONES DE NOTIFICACIÓN ---
    function mostrarNotificacion(mensaje) {
        notificacionMensaje.innerHTML = mensaje;
        notificacion.style.display = 'flex';
    }

    notificacionCerrar.addEventListener('click', function() {
        notificacion.style.display = 'none';
    });
    
    // --- INICIALIZACIÓN ---
    // Genera la malla al cargar la página por primera vez
    generarMalla();
});

