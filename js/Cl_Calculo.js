export default class Cl_Persona{
    constructor(){
        this.contF = 0;
        this.contM = 0;
        this.contP = 0;
    }

    procesarPersona(p){
    
    this.contP++;
      
        if (p.sexo == "F") {
            this.contF++;
        }
        else if (p.sexo == "M") {
            this.contM++;
        }
        
    }
MayorCantidad(){
    if(this.contF>this.contM){
        return "Hay más Mujeres";
    }else if(this.contF<this.contM){
        return "Hay más Hombres";
    }

}

PorcentajeMujeres(){
    return (this.contF/this.contP)*100;}
    
}
