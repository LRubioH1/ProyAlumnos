class Alumno {
    constructor(nombre, apellidos, edad, materia, calificacion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materia = materia;
        this.calificacion = calificacion;
    }
}


class Grupo {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }
}


class GestorDeAlumnos {
    constructor() {
        this.grupo = new Grupo();
    }

    agregarAlumno(nombre, apellidos, edad, materia, calificacion) {
        const alumno = new Alumno(nombre, apellidos, edad, materia, calificacion);
        this.grupo.agregarAlumno(alumno);
    }
}


const gestor = new GestorDeAlumnos();


gestor.agregarAlumno("Juan", "Pérez", 20, "Matemáticas", 8);
