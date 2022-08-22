export interface API {
    isExistoso: boolean;
    resultado:  ICliente[];
    mensaje:    string;
}

export interface ICliente {
    id:             number;
    nombreCompania: string;
    dirreccion:     string;
    telefono:       string;
    telefono2:      string;
}
