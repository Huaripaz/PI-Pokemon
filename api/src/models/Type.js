const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {      // Creamos la tabla type
        id: {
            type: DataTypes.INTEGER,        // Su valor es un entero 
            primaryKey: true,       // Su valor va a ser unico
            autoIncrement: true,        // Su valor vaya incrementando 
        },
        name: {
            type: DataTypes.STRING,     // Su valor es un string 
            allowNull: false,       // Su valor debe ser obligatorio
        },
    },{
        timestamps: false,
        // sequalize crea automaticamente los modelos createAt y updateAt, esto lo cancelamos con el timestamps.
        freezeTableName: true,
        // nos sirve para verificar que el nombre de la tabla es igual al nombre del modelo que le estamos enviando.
    });
};
