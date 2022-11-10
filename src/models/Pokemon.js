const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {   // Creamos la tabla pokemon
    id: {
      type: DataTypes.INTEGER,    // Su valor es un entero 
      allowNull: false,   // Su valor debe ser obligatorio
      primaryKey: true,   // Su valor va a ser unico
    },
    name: {
      type: DataTypes.STRING,   // Su valor es un string
      allowNull: false,
      unique: true,   // Su valor va a ser unico 
    },
    img: {
      type: DataTypes.STRING,
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: '10',   // En caso de no recibir un valor el default va a ser '10'
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: '10',
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: '10',
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: '10',
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: '10',
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: '10',
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    timestamps: false,
    // sequalize crea automaticamente los modelos createAt y updateAt, esto lo cancelamos con el timestamps.
    freezeTableName: true,
    // nos sirve para verificar que el nombre de la tabla es igual al nombre del modelo que le estamos enviando.
  });
};
