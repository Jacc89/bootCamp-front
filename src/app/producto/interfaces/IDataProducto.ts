export interface IDataProducto {
    isExitoso: boolean;
    resultado: IProducto[];
    mensaje:   string;
}

export interface IProducto {
    id:             number;
    nombre:         string;
    caracteristica: string;
}
