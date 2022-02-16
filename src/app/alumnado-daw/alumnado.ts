export class Alumnado{
    constructor(
        public nombre:string,
        public apellidos:string,
        public dni:string,
        public fechaNac:Date,
        public poblacion:string,
        public telefono:number, 
        public curso:string,
        public modulos:Array<String>
    ){}

    public toString = () : String => {
        var cadena = "Nombre: " + this.nombre + "<br>Apellidos: " + this.apellidos + "<br>DNI: " + this.dni + "<br>Fecha Nacimiento: " + this.fechaNac + "<br>Población: " + this.poblacion + "<br>Teléfono: " + this.telefono + "<br>Curso: " + this.curso + "<br>Listado de Módulos:";
        for (let i = 0; i < this.modulos.length; i++) {
            cadena = cadena + this.modulos[i] + "<br>";           
        }
        return cadena;
    }
}

