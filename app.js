require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarTareas');
const {inquirerMenu, inquirerPausa, leerInput} = require('./helpers/inquirer');
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
            default:
                break;
        }
       // guardarDB(tareas.listadoArr);
        
       
       opcionPausa = await inquirerPausa();
        
        console.log({option});
        console.log({opcionPausa});
       
       
       
        
    } while (option !== '0');
    
    
    
}

main();
