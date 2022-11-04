const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: false,
        // sequalize crea automaticamente los modelos createAt y updateAt, esto lo cancelamos con el timestamps.
        freezeTableName: true,
        // nos sirve para verificar que el nombre de la tabla es igual al nombre del modelo que le estamos enviando.
    });
};
