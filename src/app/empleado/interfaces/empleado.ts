export interface API {
    isExitoso: boolean;
    resultado: IEmpleado[];
    mensaje:   string;
}

export interface IEmpleado {
    id:        number;
    nombres:   string;
    apellidos: string;
    direccion: string;
    telefono:  string;
    correo:    string;
    sueldo:    string;
    cargo:     string;
}
