const inquirer = require('inquirer');

require('colors');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?'.yellow,
        choices: [
            {
                value:'1',
                name: `${'1.'.blue}Crear tarea`,
            },
            {
                value:'2',
                name: `${'2.'.blue}Listar tareas`,
            },
            {
                value:'3',
                name: `${'3.'.blue}Listar tareas pendientes`,
            },
            {
                value:'4',
                name: `${'4.'.blue}Listar tareas completadas`,
            },
            {
                value:'5',
                name: `${'5.'.blue}Completar tareas`,
            },
            {
                value:'6',
                name: `${'6.'.blue}Borrar tareas`,
            },
            {
                value:'0',
                name: '0.Salir'.red,
            }

        ]

    }
]


const inquirerMenu = async () =>{
    
    console.clear();

    console.log('========================================'.green);
    console.log('           Seleccione una opción'.yellow);
    console.log('========================================'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const inquirerPausa = async () =>{
    
   console.log('\n');
    
    const {opcion} = await inquirer.prompt([
        {
            type: 'input',
            name: 'opcion',
            message: `\n Presione ${'ENTER'.blue} \n`
        }
    ]);
    return opcion
}



const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0 ){
                    return 'Por favor ingrese un valor';
                }
                return true;
            } 
        }
    ]
    const {desc} = await inquirer.prompt(question);
    return desc
}






module.exports = { inquirerMenu, inquirerPausa, leerInput };
