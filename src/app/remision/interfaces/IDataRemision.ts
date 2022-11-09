export interface IDataRemision {
    totalRegistro: number;
    totalPaginas:  number;
    pageSize:      number;
    statusCode:    number;
    isExitoso:     boolean;
    resultado:     IRemision[];
    mensaje:       string;
}

export interface IRemision {
    id:            number;
    numRemision:   number;
    fecha:         Date;
    encargadoNom:  string;
    clienteNom:    string;
    cantidad:      string;
    presentacion:  string;
    productoNom:   string;
    observaciones: string;
}
