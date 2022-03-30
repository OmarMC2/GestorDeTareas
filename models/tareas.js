const Tarea = require("./tarea");
require('colors');

class Tareas {

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea);
            console.log(key);
        });
        return listado
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasDelArray( tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }


    crearTareas(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i + 1}`. green
            const {desc, completadoEn} = tarea;
            const estado = completadoEn ? `Completada`.green : `Pendiente`.red;
            console.log(`${idx} ${desc} :: ${estado} `)
        })
    }

    listarPendientesCompletadas( completadas = true ){
       
        let contador = 0;

        this.listadoArr.forEach( (tarea) => {
            
            const {desc, completadoEn} = tarea;
            const estado = completadoEn ? `Completada`.green : `Pendiente`.red;
            if (completadas){
                if (completadoEn) {
                    
                    contador += 1;
                    
                    console.log(`${contador.toString().green} ${desc} :: ${estado} `)
                }
            }
            else{
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString().red} ${desc} :: ${estado} `)
                }

            }
            
        })

        
    }
}


module.exports = Tareas;
