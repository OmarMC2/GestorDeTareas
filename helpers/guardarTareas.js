const fs = require('fs');




const archivo = './dataBase/data.json'

const guardarDB = ( data ) =>{


    fs.writeFileSync(archivo, JSON.stringify(data))
}


leerDB = () => {

    if ( !fs.existsSync(archivo) ){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
   // console.log(info);
    const data = JSON.parse(info);
    console.log(data);
     return data

} 

module.exports = {
    guardarDB,
    leerDB,
}



