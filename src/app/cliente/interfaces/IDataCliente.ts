export interface IDataCliente {
    isExistoso: boolean;
    resultado:  ICliente[];
    mensaje:    string;
}

export interface ICliente {
    id:     number;
    nombre: string;
    direccion:  string;
    telefono:   string;
         
}
