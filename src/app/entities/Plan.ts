export interface Plan {
    id: Number,
    imagen: String,
    titulo: String,
    descripcion: String,
    rating: number,
    fecha_ida: Date,
    fecha_regreso: Date,
    precioMinimo: Number,
    totalDias: any,
    totalNoches: any
};