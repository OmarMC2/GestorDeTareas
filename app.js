require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarTareas');
const {inquirerMenu, inquirerPausa, leerInput, listadoTareasBorrar, confirmar, mostrarCheckList} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');




const main = async() =>{
   
    let option = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){

        tareas.cargarTareasDelArray(tareasDB);
    }

    

    do {
      
        option = await inquirerMenu();

        switch (option) {
            case '1':
                // crear opción
                const desc = await leerInput('descripción');
                tareas.crearTareas(desc);
                break;
            case '2': 
                tareas.listadoCompleto(tareasDB)
                break
            case '3':
                tareas.listarPendientesCompletadas(false);
                break
            case '4':
                tareas.listarPendientesCompletadas(true);
                break
            case '5':
                const ids = await mostrarCheckList(tareas.listadoArr)
                tareas.toggleComplete(ids)
                break
            case '6': 
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if(id!==  '0'){
                    const ok = await confirmar('¿Estás seguro que deseas borrarlo?')
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente'.blue)
                    }

                }
                break
            default:
                break;
        }
        
        guardarDB(tareas.listadoArr);
        
       
       opcionPausa = await inquirerPausa();
        
       
       
        
    } while (option !== '0');
    
    
    
}

main();
