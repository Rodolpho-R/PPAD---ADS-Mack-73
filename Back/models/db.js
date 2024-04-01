const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('school_octagano', 'jackOne', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão feita com sucesso');
}).catch(function(err){
    console.log('Error');
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/*Criação do DB
    const Alunos = sequelize.define('alunos1', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    turma: {
      type: DataTypes.STRING,
      allowNull: false
    },

    faltas: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    
      responsavel_nome: {
        type: DataTypes.STRING,
        allowNull: false
      },

      responsavel_email: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });
*/


